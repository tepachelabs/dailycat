# dailycat.api
dailycat.api is a fun project where cats with inspirational quotes get posted everyday!

## Requirements
This project was powered by [express generator](https://expressjs.com/en/starter/generator.html), in order to run this project you will need [node](https://nodejs.org/en/) installed and [mongodb](https://www.mongodb.com/).

## Installation
1.  You first need to install node dependencies.
```console
npm run build
``` 

2.  To add data to your database you can run either of our commands in `db/startup/`.

- To insert just one element, you can use the following command:
```console
node db/startup/insertOne
``` 

- or if you wanna insert multiple elements, you can use:
```console
node db/startup/insertMany
``` 

## Running the projects
- Run the following command and go to your browser on `localhost:3000`.
```console
npm run dev
``` 
