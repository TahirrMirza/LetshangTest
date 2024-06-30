import express from "express";
import {
  createQuestion,
  getQuestions,
} from "../controllers/question.controller.js";

const route = express.Router();

route.get("/questions", getQuestions);
route.post("/createQuestion", createQuestion);

export default route;
