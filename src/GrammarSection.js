import React, { useState } from 'react';
import './GrammarSection.css'; // Import the CSS file

const GrammarSection = () => {
  const [quizData, setQuizData] = useState([
    {
      question: 'What is a verb?',
      options: ['A noun', 'An adjective', 'An action word'],
      correctAnswer: 'An action word',
      userAnswer: null, // Store user's selected answer here
    },
    // Add more quiz questions as needed
  ]);

  const handleOptionClick = (questionIndex, selectedOption) => {
    // Update the user's answer when an option is selected
    const updatedQuizData = [...quizData];
    updatedQuizData[questionIndex].userAnswer = selectedOption;
    setQuizData(updatedQuizData);
  };

  return (
    <div className="grammar-section">
      <h2>Grammar Lessons</h2>
      <div className="lesson">
        <h3>Lesson 1: Introduction to Verbs</h3>
        <button
  onClick={() => window.open("/scribd.vpdfs.com_introduction-to-verbs.pdf", "_blank")}
  style={{
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  }}

>
  Download PDF
</button>
      <img src="/dfhgj.jpeg" alt="" />

      </div>

      <h2>Grammar Quizzes</h2>
      {quizData.map((quiz, index) => (
        <div key={index} className="quiz">
          <h3>Quiz {index + 1}</h3>
          <p>{quiz.question}</p>
          <ul>
            {quiz.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`quiz-${index}`}
                    value={option}
                    onChange={() => handleOptionClick(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {quiz.userAnswer !== null && (
            <p>
              Your answer: <strong>{quiz.userAnswer}</strong>
              {quiz.userAnswer === quiz.correctAnswer ? (
                <span className="correct">Correct!</span>
              ) : (
                <span className="incorrect">Incorrect!</span>
              )}
            </p>
          )}
        </div>

      ))}
      <h3>Lesson 2: Should Have + Past Participle </h3>
      <img src="/modals.jpeg" alt="" />
      

    </div>
  );
};

export default GrammarSection;