import { createStore, combineReducers } from 'redux';
import { wordsListReducer } from './wordsListReducer';
import { wordsStatisticReducer } from './wordsStatisticReducer';

const rootReducer = combineReducers({
  wordsList: wordsListReducer,
  wordsStatistic: wordsStatisticReducer,
});

export const store = createStore(rootReducer);
