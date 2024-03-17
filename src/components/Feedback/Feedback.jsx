import css from "./Feedback.module.css";

const Feedback = ({ count, totalFeedback }) => {
  const positive = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <ul className={css.list}>
        <li>Good:{count.good}</li>
        <li>Neutral:{count.neutral}</li>
        <li>Bad: {count.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positive}% </li>
      </ul>
    </div>
  );
};

export default Feedback;
