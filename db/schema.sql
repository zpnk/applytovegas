-- Database schema for Apply to Vegas
-------------------------------------

------------
-- Functions
------------

-- Set the updated_at column to the current time.
create function set_updated_at() returns trigger as $$
  begin
    new.updated_at := now();
    return new;
  end;
$$ language plpgsql;

---------
-- Tables
---------

create table companies (
  id         serial    primary key,
  name       text      not null,
  email      text      not null unique,
  website    text      not null,
  logo       text      not null,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

-- On company update, bump updated_at.
create trigger set_company_updated_at
  before update on companies
  for each row execute procedure set_updated_at();

create table roles (
  id    serial primary key,
  title text   not null
);

-- Link companies with roles
create table company_roles (
  company integer not null references companies(id),
  role    integer not null references roles(id),

  constraint company_roles_unique unique(company, role)
);

create table candidates (
  id         serial    primary key,
  name       text      not null,
  email      text      not null unique,
  role       integer   not null references roles(id),
  about      text      not null,
  resume     text      not null,
  links      text[],
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

-- On candidate update, bump updated_at.
create trigger set_candidate_updated_at
  before update on candidates
  for each row execute procedure set_updated_at();

create table connections (
  id         serial    primary key,
  company    integer   not null references companies(id),
  candidate  integer   not null references candidates(id),
  created_at timestamp not null default now(),

  constraint connections_unique unique(company, candidate)
);

--------
-- Views
--------

-- Match companies with candidates based on roles. Exclude previous matches.
create view matches as
  select company, array_agg(candidate) as candidates
  from (
    select companies.id as company, candidates.id as candidate
      from candidates
      join company_roles on (candidates.role = company_roles.role)
      join companies     on (company_roles.company = companies.id)
  ) match
  where (company, candidate)
  not in (select c.company, c.candidate from connections c)
  group by company;
