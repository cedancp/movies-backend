# Movies backend

Rest API for movies app

# About

This project was made with Typescript, typeorm for database managing and express.
Commits are done with the help of [git-cz](https://github.com/streamich/git-cz) and [commitlint](https://github.com/conventional-changelog/commitlint)

There are hooks in place for running tests and linter previous to commit with help of [husky v5](https://github.com/typicode/husky)

# Running locally

1. Configure [mariadb](https://mariadb.com/kb/en/getting-installing-and-upgrading-mariadb/) on your local machine.
2. Create a new database scheme called 'movies' to use with this api
3. On the root directory you'll find the [sql script](movies-db.sql) with data already in place, restore it on 'movies' scheme
4. Configure database credentials on [ormconfig](ormconfig.json)
5. Run `npm install`
6. And finally run `npm start` to start server

# Testing

Run `npm test` to run tests




