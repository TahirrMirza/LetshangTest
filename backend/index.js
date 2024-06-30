import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import question from "./routes/question.route.js";

const app = express();

app.use(bodyParser.json());

app.use("/api", question);

mongoose
  .connect("mongodb://localhost:27017/questions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
