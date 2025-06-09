This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommandations. 

`src` -> Inside the src folder all the actual sourcecode regardin the project will reside, this will not incude any knid of tests.(You might want to make seperate tests folder)

Lets take a look inside the `src` folder

`config` -> In this folder anything an everything regarding any configurations setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere n a cleaner fashion, this is done in the `server-config.js` file. One more example can be to setup you logging library that can help you to prepare meaningful logs, so cinfiguration for this library dhould also be done here.

`routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

`middlewares` -> They are just going to incercept the request where we can write our validators, authenticators etc.

`controllers` -> In controllers we just receive the incoming requests and data then pass it to the business layer.

`repositores` -> In this folder , we write all the logic related to database integration

`services` - > It contains business logics and interact with repositories

`utils` -> contains helper classes

- go inside the `src` folder and execute the following command : 

```
npx sequelize-cli init
```
By executing the above comand,you get migrations and seeders folder with a config.json in cofig folder.