### package.json

```
npm init -y
```

### Express, Dotenv, MySQL, Sequelize

```
npm install express dotenv mysql2 sequelize
```

### TypeScript

```
npm i -D typescript @types/express @types/node
```

### tsconfig.json

```
npx tsc --init

# tsconfig.json out dir add
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Nodemon, concurrently

```
npm install -D concurrently nodemon ts-node

# package.json scripts add
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  },
}
```

### Swagger UI

```
npm install swagger-jsdoc swagger-ui-express
npm install -D @types/swagger-ui-express @types/swagger-jsdoc
```

### Sequelize Init

```
# sequelize setting
npx sequelize-cli init
# config database edit
vi config/config.json
```

### Sequelize Migrate

```
# migrations create
npx sequelize-cli migration:generate --name create-table
# umigrations edit
vi migrations/xxxx-create-table.js
npx sequelize-cli db:migrate
```

### Sequelize Sample

```
npm i -D faker
# sample create
npx sequelize-cli seed:create --name sample-data
# sample edit
vi seeders/xxxx-sample-data.js
npx sequelize-cli db:seed:all
```

### directory

```
migrations/   #
seeders/      #
config/       #
dist/         # ts build file
src/
├── config/
│   └── db.ts
├── controllers/
│   ├── post.controller.ts
│   └── comment.controller.ts
├── services/
│   ├── post.service.ts
│   └── comment.service.ts
├── models/
│   ├── post.model.ts
│   └── comment.model.ts
├── routes/
│   ├── post.route.ts
│   └── comment.route.ts
└── server.ts
```
