import React from "react";
import "./Test.css";
const Test = () => {
  const QnA = [
    {
      ques: "Out of which is insulating material",
      option1: "copper",
      option2: "gold",
      option3: "silver",
      option4: "paper",
    },
    {
      ques: "Out of which is insulating material",
      option1: "copper",
      option2: "gold",
      option3: "silver",
      option4: "paper",
    },
    {
      ques: "Out of which is insulating material",
      option1: "copper",
      option2: "gold",
      option3: "silver",
      option4: "paper",
    },
    {
      ques: "Out of which is insulating material",
      option1: "copper",
      option2: "gold",
      option3: "silver",
      option4: "paper",
    },
  ];

  return (
    <div className="container">
      <div className="quiz_container">
        <h1>Test</h1>
        {QnA.map((ele, i) => (
          <div key={i} className="quiz_container_problemdiv">
            <h3>Q1 {ele.ques}</h3>
            <p>(a) {ele.option1}</p>
            <p>(b){ele.option2}</p>
            <p>(c){ele.option3}</p>
            <p>(d){ele.option4}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
