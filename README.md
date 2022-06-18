# ionic-react-graphql-express-mysql
# Fullstack  ionic-react-graphql-express-mysql


**API** built with Node + Express + GraphQL + MySQL. 

**WebApp** built with Ionic React + Redux.

## 📝 Features
- [x] List customers
- [x] Add customer
- [x] Delete customer
- [x] View single customer by email
- [x] search customer by email
- [x] mean note by customer

## ▶️ Running
### Clone this repo to your local machine using
- Clone repo `git clone https://github.com/bougares/ionic-react-graphql-express-mysql.git`
### Get into the directory backend  and Install dependencies
- Install NPM modules API `cd backend` and excute  `npm install`
### Get into the directory frontend  and Install dependencies
- Install NPM modules Webapp `cd ionicApp` and `npm install`
### Import database 
#### you can edit the file if you want to change the db_name
#### if you are using a different db_name and it elready exists,
#### you can comment the first two lines, remain the line => USE test_db;
#### and just change the db_name
- Modify `.env file ` for database config
- Install and open server mysql(xamp or wamp ...)
- For windows user : add mysql to path envirenement
- Import database  `cd src/database` and execute  `mysql -u[db-user] -p[db-password] < db_ionic.sql`


- Modify `/api/src/config/config.json` for API port (optional)
- Modify `/web/.env` for web port (optional)
- Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
- Run Webapp `cd web` and `npm start`, browse web at http://localhost:3000/

## 🏗 Core Structure
    Ionic react fullstack
      ├── backend
      │   ├── src
      │   │   ├── database
      │   │   ├── lib
      │   │   ├── model
      │   │   │   ├── user
      │   │   │      ├── mutations.js
      │   │   │      ├── queries.js
      │   │   │      ├── type_moyen.js
      │   │   │      ├── type.js
      │   │   │      └── user.js
      │   │   ├── routes
      │   │   ├── schema
      │   │   ├── util
      │   │   └── server.js
      │   │
      │   └── package.json
      │   └── .env
      │
      ├── ionic 
      │   ├── public
      │   ├── src
      │   │   ├── components
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   ├── .env
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


# Run the server locally
npm start

# Run the server locally in dev mode
npm run dev
```


## 📸 Screenshots
![screenshot](http://atulmy.com/atulmy.com/attachments/images/fullstack-graphql.gif?v=0.1)

Video: [MOV](http://atulmy.com/atulmy.com/attachments/images/fullstack-graphql.mov)

## 🏗 Core Structure
    fullstack-grap<<hql
      ├── api (api.example.com)
      │   ├── src
      │   │   ├── config
      │   │   ├── models
      │   │   ├── schema
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── components
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   ├── .env
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## 📘 Guides
### API
- Adding new Module (Eg: Users):
  - Copy `/api/src/models/thought.js` to `/api/src/models/user.js` and modify the file for table name and respective fields
  - Add an entry to the `models` object in `/api/src/models/index.js`
  - Copy `/api/src/schema/thoughts` to `/api/src/schema/users` and modify `type.js`, `resolvers.js` and `fields/query.js` and `fields/mutations.js`
  - Import `/api/src/schema/users/fields/query.js` in `/api/src/schema/query.js`
  - Import `/api/src/schema/users/fields/mutations.js` in `/api/src/schema/mutations.js`

### Webapp
- Adding new Module (Eg: Users):
  - Create folder `users` under `/web/src/components/`
  - Create your Container and Resusable components under `/web/src/components/users`
  - Create `api` folder under `/web/src/components/users`
  - Add `actions.js` where all your Redux Action Types and Actions will reside (refer `/web/src/components/thoughts/api/actions.js`)
  - Add `state.js` where all your respective Reducers will recide (refer `/web/src/components/thoughts/api/state.js`)
  - Import the module state in `/web/src/setup/store.js` to make it avaliable to the app
  - Encapsulate all your User related code in `/web/src/components/users`
- Adding new Route (Eg: `/users`):
  - Add a new entry to `routes` object in `/web/src/setup/routes.js` (eg `user: { list: '/list' }`)
  - Edit `/web/src/components/App.js` and add the route entry
  
## Sample GraphQL Queries

### Show all users
```js
{
  users {
    id,
    last_name,
    first_name,
    email,
    adresse,
    note
  }
}
```

### search user by email
```js
{
  user(email: "example mail") {
       id,
    last_name,
    first_name,
    email,
    adresse,
    note
  }
}
```

### Adds a new user
```js
mutation {
  addUser(last_name: "test", first_name: "test", email : "", adresse : "adresse" ,note : 10) {
     id,
    last_name,
    first_name,
    email,
    adresse,
    note
  }
}


### Tech

This example uses a number of open source projects to work properly:

* [node.js]
* [Express]
* [mysql2]
* [bcryptjs]
* [jsonwebtoken]
* [express-validator]
* [dotenv]
* [cors]
