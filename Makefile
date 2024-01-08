.PHONY: install run-dev build run-build clean deploy

install:
	@echo Installing App and CMS...
	@cd strapi && make install
	@cd react && make install

run-dev:
	@echo Running App and CMS in development mode...
	@cd strapi && make run-dev
	@cd react && make run-dev

build:
	@echo Building App and CMS...
	@cd strapi && make build
	@cd react && make build

run-build:
	@echo Running App and CMS in production mode...
	@cd strapi && make run-build
	@cd react && make run-build

clean:
	@echo Cleaning App and CMS...
	@cd strapi && make clean
	@cd react && make clean

deploy:
	@echo Deploying App and CMS...
	@cd strapi && make deploy
	@cd react && make deploy