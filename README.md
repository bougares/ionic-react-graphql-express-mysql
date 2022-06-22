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
      ├── .gitignore
      └── README.md


# Run the server locally
npm start

# Run the server locally in dev mode
npm run dev
```

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
