const express = require("express");
const userRouter = require("./server/routes/user-auth");
const { connectToDb } = require("./db");

const port = 3000;
const app = express();

connectToDb();

app.use(express.json());

app.use("/", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello registration");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
