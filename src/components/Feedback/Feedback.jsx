import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>Good: 0</li>
        <li>Neutral: 0</li>
        <li>Bad: 0</li>
      </ul>
    </div>
  );
};

export default Feedback;
