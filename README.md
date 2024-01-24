# nest-commerce

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

ÁPI commerce with [Nest](https://github.com/nestjs/nest) framework.

## Installation

1. Install dependencies.

```bash
$ yarn install
```

2. Rename `.env.template` to `.env` with environment variables.

3. Up database

```bash
$ docker-compose up -d
```

## Running the app (dev)

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Add dummy data
```
http://localhost:3000/api/v1/seed
```

## Stack

* Nest
* PostgreSQL
* Docker