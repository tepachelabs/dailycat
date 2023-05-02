# dailycat.api

dailycat.api is a fun project where cats with inspirational quotes get posted everyday!

## Requirements

This project was powered by [express generator](https://expressjs.com/en/starter/generator.html), in order to run this project you will need [node](https://nodejs.org/en/) installed and [mongodb](https://www.mongodb.com/).

## Environment Variables (.env)

For this project you need to add a `.env` file in the root of the project, for this instance we only need two variables, our database url and our [cat api key](https://thecatapi.com/) (you can skip this key, but it has some restrictions).

```env
MONGO_DB_URL=mongodb://127.0.0.1:27017/test
CAT_API_KEY=<Your-Cat-API-key>
```

## Installation

1.  You first need to install node dependencies.

```console
npm install
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
