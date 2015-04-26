DATABASE ?= applytovegas_dev

help:
	@echo "\n Commands: \n"
	@echo "    db.drop              Drops the database"
	@echo "    db.create            Creates the database"
	@echo "    db.reset             Drops the database, then creates it again"

db.drop:
	dropdb $(DATABASE)

db.create:
	createdb $(DATABASE)
	psql $(DATABASE) -f db/schema.sql

db.reset: db.drop db.create

.PHONY: help db.drop db.create db.reset
