import { useState } from "react";
import { connect } from "react-redux";
import { ResultColumn } from "../ResultColumn/ResultColumn";

import "./ResultsTable.scss";

const ResultsTable = ({ wordsCount, wordsStatistic }) => {
  const getPercent = (amount, currentValue) =>
    Math.round((currentValue * 100) / amount);
  const knownWords = wordsStatistic.knownWords.length;
  const unknownWords = wordsStatistic.unknownWords.length;
  const knownPercent = getPercent(wordsCount, knownWords);
  const unknownPercent = 100 - knownPercent;

  const [isPopupActive, setIsPopupActive] = useState(false);
  const [popupWord, setPopupWord] = useState({});

  const openPopup = (necessaryWord) => {
    setIsPopupActive(true);
    setPopupWord(necessaryWord);
  };

  const closePopupGlobaly = (event) => {
    if (!event.target.classList.contains("pop-up-wrapper")) {
      return;
    }

    setIsPopupActive(false);
  };

  return (
    <div className="results-table-wrapper">
      <h1 className="results-table__title">Results</h1>

      <div className="results-table__columns">
        <ResultColumn
          percent={knownPercent}
          title={`${knownWords} known words`}
        />
        <ResultColumn
          percent={unknownPercent}
          title={`${unknownWords} unknown words`}
        />
      </div>

      <div className="unknown-list">
        <h3 className="unknown-list__title">Unknown words:</h3>
        <ul className="unknown-list__items">
          {wordsStatistic.unknownWords.map((word) => (
            <li key={word.id} className="unknown-list__item">
              <button
                className="unknown-list__btn"
                onClick={() => openPopup(word)}
              >
                {word.translation}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isPopupActive && (
        <div className="pop-up-wrapper" onClick={closePopupGlobaly}>
          <div className="pop-up">
            <div className="pop-up-content">
              <div className="pop-up__close-panel">
                <button
                  className="pop-up__close-btn"
                  onClick={() => setIsPopupActive(false)}
                />
              </div>

              <div className="word-info">
                <p className="word-info__original">{popupWord.translation}</p>
                <p className="word-info__transcription">
                  {popupWord.transcription}
                </p>
                <p className="word-info__translated">{popupWord.word}</p>
                <p className="word-info__example">{popupWord.example}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  wordsStatistic: state.wordsStatistic,
});

export default connect(mapStateToProps)(ResultsTable);
