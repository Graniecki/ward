import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ResultColumn.scss";

export const ResultColumn = ({ percent, title, wordsList }) => {
  console.log(wordsList);
  return (
    <div className="results">
      <div style={{ width: 200, height: 200, margin: "0 auto" }}>
        <CircularProgressbar
          value={percent}
          text={`${percent}%`}
          strokeWidth={12}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#37c976",
            textColor: "black",
          })}
        />
      </div>
      <h4 className="results__title">{title}</h4>

      {/* <ul className="results__words">
        {wordsList.map((word) => (
          <li key={word.id} className="results__word">
            {word.translation}
            <Popup
              trigger={<button className="results__info">&#63;</button>}
              position="right center"
            >
              <div>{word.word}</div>
            </Popup>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
