import React, { useState, useEffect, useRef } from "react";

type TriviaQuestion = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const styles = {
  outerContainer: {
    borderRadius: "14px", // add border radius to the outside div
    overflow: "hidden",   // ensures inner content stays within rounded corners
  },
  triviaContainer: {
    background: "#f0f4f8",
    padding: "0.8rem",
    borderRadius: "14px", // same border radius as TechNews
    width: "100%",
    margin: 0,
    textAlign: "center" as const,
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box" as const,
  },
  title: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  triviaQuestion: {
    margin: "0.5rem 0",
    fontWeight: "bold" as const,
    fontSize: "0.9rem",
  },
  answersContainer: {
    margin: "0.5rem 0",
  },
  answerButton: {
    display: "block",
    width: "100%",
    margin: "0.3rem 0",
    padding: "0.4rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s",
    fontSize: "0.85rem",
  },
  correct: {
    background: "#4caf50",
    borderColor: "#4caf50",
    color: "#fff",
  },
  incorrect: {
    background: "#f44336",
    borderColor: "#f44336",
    color: "#fff",
  },
  nextButton: {
    marginTop: "0.8rem",
    padding: "0.4rem",
    cursor: "pointer",
    borderRadius: "4px",
    background: "#2196f3",
    color: "#fff",
    border: "none",
    fontSize: "0.9rem",
    width: "100%",
  },
  score: {
    marginTop: "0.8rem",
    fontWeight: "bold" as const,
    color: "#555",
    fontSize: "0.8rem",
  },
  questionCount: {
    marginTop: "0.8rem",
    fontWeight: "bold" as const,
    color: "#555",
    fontSize: "0.8rem",
  },
};

export default function TriviaWidget() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetch(
      "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            res.status === 429
              ? "Too many requests. Please try again later."
              : `HTTP error! status: ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data.results ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch trivia questions");
        setLoading(false);
      });
  }, []);

  const handleAnswerClick = (answer: string) => {
    if (showAnswer) return;
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === questions[currentIndex].correct_answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  if (isLoading) {
    return <div>Loading trivia questions...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!questions.length) return <div>No questions available.</div>;

  const currentQuestion = questions[currentIndex];
  const allAnswers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div style={styles.outerContainer}>
      <div style={styles.triviaContainer}>
        <h2 style={styles.title}>Trivia Time!</h2>
        <p
          style={styles.triviaQuestion}
          dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
        />
        <div style={styles.answersContainer}>
          {allAnswers.map((answer, index) => {
            let buttonStyle = { ...styles.answerButton };
            if (showAnswer) {
              if (answer === currentQuestion.correct_answer) {
                buttonStyle = { ...buttonStyle, ...styles.correct };
              } else if (answer === selectedAnswer) {
                buttonStyle = { ...buttonStyle, ...styles.incorrect };
              }
            }
            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                disabled={showAnswer}
                style={buttonStyle}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
        {showAnswer && (
          <p>
            {selectedAnswer === currentQuestion.correct_answer
              ? "Correct!"
              : "Incorrect!"}
          </p>
        )}
        <button onClick={nextQuestion} style={styles.nextButton}>
          Next Question
        </button>
        <div style={styles.score}>Score: {score}</div>
        <div style={styles.questionCount}>
          Question {currentIndex + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
}