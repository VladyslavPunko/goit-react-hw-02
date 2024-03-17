import css from "./Feedback.module.css";

const Feedback = ({ count }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>Good:{count.good}</li>
        <li>Neutral:{count.neutral}</li>
        <li>Bad: {count.bad}</li>
      </ul>
    </div>
  );
};

export default Feedback;
