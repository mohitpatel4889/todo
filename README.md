## Description

This is the project for the Opencare-Sync API.

This API uses Nest.js as an API Framework, and Typescript as the language of choice.


## Installation

```bash
$ npm install
```

## Prerequisites
The app requires:
- A postgres database to store app data.

.dev.sample and .test.sample are in directory, by removing .sample extension it will consider that enviornment 
Below is an example development `.env` file to start with (this should be created in the root directory and will be automatically pulled into the app using dotenv)
```
# App
PORT=3032
# Database
DATABASE_URL=postgres://postgres:postgres@localhost:5432/todo_sample

```

## Running the app

```bash
$ npm run start:dev
```

#Todo: Tests are not implemented for this project
## Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

Migrations are all wrappers around TypeOrm functionality. See the package.json file for true definitions.

```bash
# generate
$ npm run migration:generate {NAME_OF_MIGRATION}

# run migrations
$ npm run migration:run

# revert most recent migration
$ npm run migration:revert
```

## Authentication

#Todo: Authentication to be implemented for this application


## Release Process
Release Process to be implemented for this application, Grunt, CodeShip, AzureDevOps can be used 
