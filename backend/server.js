require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(`${process.env.PORT}`, () => {
        console.log(`Server is running on port ${process.env.PORT} and connected to MongoDB`);
    });

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });