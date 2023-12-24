import React from "react";
import { useState } from "react";
const Question = ({ title, info }) => {
  const [showDetails, setShowDeltails] = useState(false);
  console.log(info.substring(0, 50));

  return (
    <section className="question">
      <header>
        <button
          className="question-btn"
          onClick={() => setShowDeltails(!showDetails)}
        >
          {showDetails ? "less info" : " more info"}
        </button>
        <h5>{title}</h5>
      </header>
      {showDetails && <p>{info}</p>}
    </section>
  );
};

export default Question;
