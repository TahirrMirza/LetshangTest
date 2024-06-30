import React, { useRef, useState } from "react";
import { Animated, Easing, ScrollView, View } from "react-native";
import Buttons from "../../components/Buttons/index";
import Container from "../../components/Container/index";
import GradientWrapper from "../../components/GradientWrapper/index";
import InputField from "../../components/InputField/index";
import QuestionItem from "../../components/QuestionItem/index";
import Seperator from "../../components/Seperator";
import styles from "./styles";

const Questions = () => {
  const [questions, setQuestions] = useState([
    { question: "Company/Organization:", answer: null, optionType: "input" },
    { question: "Job Title:", answer: null, optionType: "input" },
    {
      question: "Are you a current student?:",
      answer: null,
      optionType: "options",
      options: ["Yes", "No"],
      multiple: false,
    },
    {
      question: "Where did you hear about this event?:",
      answer: null,
      optionType: "options",
      options: ["LinkedIn", "Instagram", "Twitter", "Facebook"],
      multiple: true,
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1);

  const toggleOption = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = selectedOptions[currentQuestionIndex] || [];

    let updatedAnswer;
    if (currentQuestion.multiple) {
      updatedAnswer = currentAnswer.includes(option)
        ? currentAnswer.filter((item) => item !== option)
        : [...currentAnswer, option];
    } else {
      updatedAnswer = [option];
    }

    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: updatedAnswer,
    });

    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[currentQuestionIndex].answer = updatedAnswer;
      return updatedQuestions;
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestionNum(currentQuestionIndex + 1 + 1);
        slideAnim.setValue(100);
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = selectedOptions[currentQuestionIndex] || [];

  return (
    <GradientWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Container>
          <Seperator seperate="10%" />
          <Animated.View
            style={[
              styles.questionContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <QuestionItem
              question={currentQuestion.question}
              totalQuestions={questions.length}
              currentQuestion={currentQuestionNum}
            />
            <Seperator seperate="8%" />
            {currentQuestion.optionType === "input" ? (
              <InputField
                multiline
                placeholder="Write your answer here"
                onChangeText={(text) =>
                  setQuestions((prevQuestions) => {
                    const updatedQuestions = [...prevQuestions];
                    updatedQuestions[currentQuestionIndex].answer = text;
                    return updatedQuestions;
                  })
                }
                value={currentQuestion.answer || ""}
              />
            ) : (
              currentQuestion.options.map((option, index) => (
                <Buttons.Option
                  key={index}
                  text={option}
                  isSelected={currentAnswer.includes(option)}
                  onPress={() => toggleOption(option)}
                />
              ))
            )}
          </Animated.View>
        </Container>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Buttons.Primary text="Next Question" onPress={nextQuestion} />
      </View>
    </GradientWrapper>
  );
};

export default Questions;
