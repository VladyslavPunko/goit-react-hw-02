import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = count.good + count.neutral + count.bad;

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />

      {totalFeedback > 0 ? <Feedback count={count} /> : <Notification />}
    </>
  );
}

export default App;
