import React from "react";
import Question from "./single_question";
const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      <div>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Questions;
