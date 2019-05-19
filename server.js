var express = require("express");
var app = express();

//uses cloud's port or localhost 5000
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CODE HERE

//app.listen always goes at the end of your code
app.listen(PORT, function() {
  console.log("App listening on PORT:" + PORT);
});
