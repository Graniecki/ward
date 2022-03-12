import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import wordsStatisticActions from '../../redux/wordsStatisticActions';
import classNames from "classnames";
import "./Card.scss";

const Card = ({ word, wordsCount, addKnown, addUnknown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const wordId = +searchParams.get("wordId");

  useEffect(() => setIsOpen(false), [word]);

  const nextWord = (word, action) => {
    history.push(`/modes/total-recall?wordId=${wordId + 1}`);
    action(word);

    if (wordId + 1 > wordsCount) {
      history.push({
        pathname: "/modes/total-recall/results",
      });
    }
  };

  return (
    <div className="card-wrapper">
      <div className="card">

        <div className="card__info">
          <p>{word.word}</p>
          <div
            onClick={() => setIsOpen(true)}
            className={classNames({
              "card__hidden-block": true,
              hidden: true,
              open: isOpen,
            })}
          >
            <p>{word.transcription || "-"}</p>
            <p>{word.translation}</p>
          </div>
        </div>

        <div className="card__navigation">
          <button
            className="card__button card__button_known"
            onClick={() => nextWord(word, addKnown)}
          >
            known
          </button>
          <button
            className="card__button card__button_unknown"
            onClick={() => nextWord(word, addUnknown)}
          >
            unknown
          </button>
        </div>

      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addKnown: (word) => dispatch(wordsStatisticActions.addKnownWord(word)),
  addUnknown: (word) => dispatch(wordsStatisticActions.addUnknownWord(word)),
});

export default connect(null, mapDispatchToProps)(Card);
