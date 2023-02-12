const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const db_url = "mongodb://localhost:27017/user";

//port number extracted from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// to surpress the warning it occurs if u use localhost in the db url instead of ip address of db
mongoose.set("strictQuery", false);

//DB connection
mongoose
  .connect(process.env.DB_URL || db_url)
  .then(() => {
    console.log(`Connected To MongoDB`);
  })
  .catch((err) => console.log(err));

// this is to extract the json bcz node cannt understands it
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.use("/", userRoutes);
