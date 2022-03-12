const initialState = {
  knownWords: [],
  unknownWords: [],
};

export const wordsStatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'words-statistic/add-known-word':
      return {
        ...state,
        knownWords: [...state.knownWords, action.payload],
      };

    case 'words-statistic/add-unknown-word':
      return {
        ...state,
        unknownWords: [...state.unknownWords, action.payload],
      };

    case 'words-statistic/reset-results':
      return {
        knownWords: [],
        unknownWords: [],
      };

    default:
      return state;
  }
};
