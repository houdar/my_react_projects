import React from "react";
import menu from "./data";
import { useState, useEffect } from "react";
import Questions from "./Questions";
function App() {
  const [questions, setQuestions] = useState(menu);

  const fetchData = async () => {
    try {
      const response = await fetch(menu);
      const data = await response.json();
      setQuestions(questions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(questions);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
