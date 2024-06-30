import Question from "../models/question.model.js";

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createQuestion = async (req, res) => {
  const { question, type, options } = req.body;

  const newQuestion = new Question({
    question,
    type,
    options: type === "options" ? options : undefined,
  });

  try {
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
