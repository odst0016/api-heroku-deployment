const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require("path");

console.log("web 36 rocks");
console.log(__dirname);
console.log(process.env.USER);
console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/api/*", (_, res) => {
  res.status(200).json({ data: "Its Working" });
});

app.use("*", (_, res) => {
  //send back index.html
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
