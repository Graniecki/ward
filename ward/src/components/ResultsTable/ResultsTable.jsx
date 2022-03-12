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

  return (
    <div className="results-table-wrapper">
      <h1 className="results-table__title">Results</h1>

      <div className="results-table__columns">
        <ResultColumn
          percent={knownPercent}
          title={`${knownWords} known words`}
          // wordsList={wordsStatistic.knownWords}
        />
        <ResultColumn
          percent={unknownPercent}
          title={`${unknownWords} unknown words`}
          // wordsList={wordsStatistic.unknownWords}
        />
      </div>

      <div className="unknown-list">
        <h3 className="unknown-list__title">Unknown words:</h3>
        <ul className="unknown-list__items">
          {wordsStatistic.unknownWords.map(word => (
            <li key={word.id} className="unknown-list__item">
              {word.translation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wordsStatistic: state.wordsStatistic,
});

export default connect(mapStateToProps)(ResultsTable);
