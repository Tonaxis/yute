.PHONY: install run-dev build run-build clean deploy env

install:
	@make env
	@echo Installing Strapi dependencies...
	@npm install

run-dev:
	@echo Running Strapi in development mode...
	@npm run develop

build:
	@echo Building Strapi...
	@npm run build

run-build:
	@echo Running Strapi in production mode...
	@npm start

clean:
	@echo Cleaning Strapi...
	@npm run clean

deploy:
	@echo Deploying Strapi...
	@make build
	@make run-build

env:
	@echo Strapi environment variables:
	@if exist .env del .env
	@copy .env.default .env

