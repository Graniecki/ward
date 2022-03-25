import { useMemo, useCallback } from "react";
import { Switch, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import wordsStatisticActions from "../../redux/wordsStatisticActions";

import { ModeCard } from "../../components/ModeCard/ModeCard";
import WordsStatistic from "../../components/WordsStatistic/WordsStatistic";
import Card from "../../components/Card/Card";
import ResultsTable from "../../components/ResultsTable/ResultsTable";

import "./Modes.scss";

const Modes = ({ words, resetResults }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const wordId = +searchParams.get("wordId");

  if (location.pathname === "/modes") {
    resetResults();
  }

  const shuffle = useCallback(() => {
    let array = [...words];
    let randomIndex;
    let currentIndex = array.length;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }, []);

  const shuffledWords = useMemo(() => {
    return shuffle();
  }, []);

  return (
    <div className="modes">
      <Switch>
        <Route exact path={"/modes"}>
          <div className="modes-wrapper">
            <ModeCard
              title="Total recall"
              description="In this mode, you'll try to recall all your words."
              path="/modes/total-recall?wordId=1"
            />

            <ModeCard
              title="Vice Versa"
              description="Native -> Foreign"
              path="/modes/vice-versa?wordId=1"
            />
          </div>
        </Route>

        <Route exact path={"/modes/total-recall"}>
          <div className="total-recall">
            <WordsStatistic wordsRemain={shuffledWords.length - (wordId - 1)} />
            <Card
              wordsCount={shuffledWords.length}
              word={shuffledWords[wordId - 1]}
              version="standart"
            />
          </div>
        </Route>

        <Route exact path={"/modes/vice-versa"}>
          <div className="vice-versa">
            <WordsStatistic wordsRemain={shuffledWords.length - (wordId - 1)} />
            <Card
              wordsCount={shuffledWords.length}
              word={shuffledWords[wordId - 1]}
              version="vice-versa"
            />
          </div>
        </Route>

        <Route path={"/modes/results"}>
          <ResultsTable wordsCount={shuffledWords.length} />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  words: state.wordsList,
});

const mapDispatchToProps = (dispatch) => ({
  resetResults: () => dispatch(wordsStatisticActions.resetResults()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modes);
