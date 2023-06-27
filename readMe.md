---
page_type: Production
products:
    - REST-API & Frontend
languages:
    - typescript
extensions:
    createdDate: 06/2023
---

# Purchase Order Backend

# Elapsed time for development
- 4 hours for setting up project and backend api development
- 3 hours for frontend development
- 0.5 hour for testing and minor fixes

## Prerequisites

- Node.js >= 16.x
- NPM >= 6.12.x
- Yarn >= 1.22.5

## Setup Configuration File

- Copy and fill out the env file

```sh
cp .env.example .env
```

```sh
MONGODB_URI_SCHEME="mongodb"
MONGODB_PORT=27017
MONGODB_HOST=mongo
MONGODB_DATABASE=alpine
MONGODB_USER=root
MONGODB_PASSWORD=123456
MONGODB_POOL_SIZE=3

#PORT(if to change port, please edit docker file's port)
PORT=3000

```

## Setup PM2 Monitoring(Optional)

- Install pm2 globally and link to pm2.io for monitoring

    1. Install PM2 Runtime on your server: `npm install -g pm2`

    2. Then link PM2 to PM2.io: `pm2 link <public-key> <private-key>`

    3. Now start a Node.js application

## Run the project

- Install project dependencies
    `npm install`
- Start dev server
    `npm run dev`
- Build Server for production
    `npm run build`
- Start/Stop prod server with pm2 (Make sure project needs to be built first before starting)
    `npm start`
    `npm stop`
- Run test
    `npm test`

## Development

- API Url: <http://localhost:3000>
- Swagger document: <http://localhost:3000/api/guide>

## Code Formatting

Please format code using `npm run format` before git push.

## API Documents and guide

- API basic url: <host-name>/api
- Health check: <host-name>/api/status/health
- Swagger document: <host-name>/api/guide

## Resources

### Typescript

This project is written using [Typescript](http://www.typescriptlang.org/).

### PM2 for monitoring

[PM2.io](https://pm2.io)

### nodemon for hot-reload in development

### Jest for testing

[Jest document](https://jestjs.io/docs/getting-started)

[MongoDB best practices](https://severalnines.com/database-blog/how-go-production-mongodb-top-ten-tips)

## Copyright

Copyright (c) 2023 Alpine Home Air. All rights reserved.
