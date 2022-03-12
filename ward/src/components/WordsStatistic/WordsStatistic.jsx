import { connect } from 'react-redux';
import "./WordsStatistic.scss";

const WordsStatistic = ({ wordsRemain, wordsStatistic }) => {
  return (
    <div className="statistics-wrapper">
      <div className="statistics">
        <p className="statistics__info">Words remain - {wordsRemain}</p>
        <p className="statistics__info">Known words - {wordsStatistic.knownWords.length}</p>
        <p className="statistics__info">Unknown words - {wordsStatistic.unknownWords.length}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  wordsStatistic: state.wordsStatistic,
});

export default connect(mapStateToProps)(WordsStatistic);
