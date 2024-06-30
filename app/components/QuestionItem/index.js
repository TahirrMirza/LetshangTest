import colors from "@/app/config/colors";
import React from "react";
import { View } from "react-native";
import Typography from "../../config/Typography/index";
import Seperator from "../Seperator/index";
import styles from "./styles";

const QuestionItem = ({
  currentQuestion = 1,
  totalQuestions = 4,
  question = "",
}) => {
  return (
    <View style={styles.container}>
      <Typography.CommonText
        color={colors.primary}
        fontSize={14}
        fontWeight="600"
      >
        {`QUESTION ${currentQuestion} OF ${totalQuestions}`}
      </Typography.CommonText>
      <Seperator seperate="2%" />
      <Typography.CommonText fontSize={26} fontWeight="600">
        {question}
      </Typography.CommonText>
    </View>
  );
};

export default QuestionItem;
