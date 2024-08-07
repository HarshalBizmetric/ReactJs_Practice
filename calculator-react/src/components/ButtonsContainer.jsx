import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((btnName) => (
        <button
          key={btnName}
          className={styles.button}
          onClick={() => onButtonClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
