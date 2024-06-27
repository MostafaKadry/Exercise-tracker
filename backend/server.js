require("dotenv").config();
PORT = process.env.PORT || 5000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { connectToDb } = require("./database.js");
const app = express();
const exercisesRouter = require('./routes/exercise');
const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// connect to Database and get access to Data
connectToDb();

mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`app is working on port ${PORT}`));
})
