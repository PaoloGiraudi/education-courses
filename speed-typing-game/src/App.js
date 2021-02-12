import React, { useState, useEffect, useRef } from "react";

function App() {
  const START_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function startGame(e) {
    e.preventDefault();
    if (isTimeRunning === false) {
      setIsTimeRunning(true);
      setTimeRemaining(START_TIME);
      setText("");
      textBoxRef.current.disabled = false;
      textBoxRef.current.focus();
    }
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  function calculateWordCount(text) {
    const wordsArr = text.split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning === true) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
