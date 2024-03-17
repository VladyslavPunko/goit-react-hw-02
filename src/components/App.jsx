import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [count, setCount] = useState(() => {
    const stringifyCount = localStorage.getItem("feedBack");
    const parsedCount = JSON.parse(stringifyCount) ?? initialFeedback;
    return parsedCount;
  });

  useEffect(() => {
    localStorage.setItem("feedBack", JSON.stringify(count));
  }, [count]);

  const totalFeedback = count.good + count.neutral + count.bad;

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setCount(initialFeedback);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback count={count} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
