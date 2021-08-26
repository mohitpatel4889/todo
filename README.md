## Description

This is the project for the ToDo Application.

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

## Endpoints
**/** endpoint will display Hello World!
**/todo** endpoint will list all current Visible and Non Completed Todos 

## Functionalities
This Application uses ejs for UI rendering

Todo will be ordered based on ids
Edit Button will allow to edit todo and save
Delete Button will allow to delete todo from the list 

# Consideration
.However it can be further implemented to sort by due
Filters can be added to show completed todos or past todos
Delete can be soft delete by  using isVisible flag 
Factory can be used to create sample todos 

## Authentication
#Todo: Authentication to be implemented for this application
#Todo: Third party authentication can bs used such as google, facebook, etc...

## Change Events or Event Log
Subscribers can be used to track each changes and events can be persisted

## Sessions
#Todo: Redis can be used to store session and user information from authentication

## Pagination
#Todo: Todos can be paginated 

## Release Process
Release Process to be implemented for this application, Grunt, CodeShip, AzureDevOps can be used 
