const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.use(routes);

  mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/reactshoppinglist")
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
