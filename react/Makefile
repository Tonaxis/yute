.PHONY: install run-dev build run-build clean deploy env

install:
	@make env
	@echo Installing App dependencies...
	@npm install
	@npm install -g serve

run-dev:
	@echo Running App in development mode...
	@npm start

build:
	@echo Building App...
	@npm run build

run-build:
	@echo Running App...
	@serve -s build

clean:
	@echo Cleaning App...
	@rm -rf build

deploy:
	@echo Deploying App...
	@make build
	@make run-build

env:
	@echo App environment:
	@del .env
	@copy .env.default .env

