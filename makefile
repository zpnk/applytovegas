DATABASE ?= applytovegas_dev

help:
	@echo "\n Commands: \n"
	@echo "    test                 Run the test suite"
	@echo "    db.drop              Drops the database"
	@echo "    db.create            Creates the database"
	@echo "    db.reset             Drops the database, then creates it again"

test:
	./node_modules/.bin/_mocha test --recursive --require should --bail --colors

db.drop:
	dropdb $(DATABASE)

db.create:
	createdb $(DATABASE)
	psql $(DATABASE) -f db/schema.sql

db.reset: db.drop db.create

.PHONY: help test db.drop db.create db.reset
