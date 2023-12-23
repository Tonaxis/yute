.PHONY: install run-dev build run-build clean deploy

install:
	@echo Installing App and CMS...
	@cd guide-cms && make install
	@cd guide && make install

run-dev:
	@echo Running App and CMS in development mode...
	@cd guide-cms && make run-dev
	@cd guide && make run-dev

build:
	@echo Building App and CMS...
	@cd guide-cms && make build
	@cd guide && make build

run-build:
	@echo Running App and CMS in production mode...
	@cd guide-cms && make run-build
	@cd guide && make run-build

clean:
	@echo Cleaning App and CMS...
	@cd guide-cms && make clean
	@cd guide && make clean

deploy:
	@echo Deploying App and CMS...
	@cd guide-cms && make deploy
	@cd guide && make deploy