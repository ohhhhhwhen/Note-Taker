"use strict";
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


app.listen(PORT, () => console.log("App listening on PORT " + PORT));
