# Instructions
This is a NodeJS server that makes use of [express](https://expressjs.com/) and [pg](https://www.npmjs.com/package/pg). 

To use this repo, first install it by running ```npm install```. Then, change the config file at ```./src/config/index.js```. You will need to replace the user, password and database with your own.

Once the database configs have been set, run ```npm seed``` to create and populate fake user tables and data into your database. The seed files are found at ```.src/db/seed/data/users.js``` and the seed script is run at ```./src/db/seed/index.js```. All seed query strings are obtained from ```./src/constants/QUERIES/USERS.js```. 

# Adding New Models to the App
Data in the server flows like this: 

> db <---> repositories <---> controller <---> router/server

For most simple CRUD apps, you will not need to tweak the db files to add new models. You can create new models that you wish to introduce in the repositories, controllers, routers folders by following what I have done with the user example. 

Don't forget to use your new router in your express server at the end.

# Other Cool Features
1. When running tests, the [NODE_ENV](https://stackoverflow.com/questions/16978256/what-is-node-env-in-express) is set to 'test', so tests for insertion and deletion of data get rolled back. This prevents your database from inserting and deleting data when tests are run. You can look at the ```./src/config/index.js``` and ```./src/db/postgres/index.js``` files to see how I have implemented this.

2. Some tests are written for the API endpoints in ```./test/server.spec.js```. These are particularly useful if you do not like to create frontend components to test your backend routes (everything can be tested automatically!). The test accesses ```GET``` and ```POST``` ```'/user'``` routes by using the chai-expect library.

3. The seeder at ```./src/db/seed/index.js``` creates and populates tables in your database automatically when you run ```npm run seed```. You can remove the seed folder if you prefer to seed your files manually.
