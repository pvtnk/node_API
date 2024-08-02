import express from "express";
import AuthRoutes from "./routes/route.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import taskRoutes from "./routes/route.js";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(
    "mongodb+srv://nandhuraja08:nandhu2005@cluster1.fgribv8.mongodb.net/Task?retryWrites=true&w=majority&appName=Cluster1",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

  app.use("/",taskRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to the Task Management System");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
