const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "*"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/customers")(app);
const PORT = process.env.PORT || 6080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});