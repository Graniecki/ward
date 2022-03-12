const addKnownWord = (word) => ({
  type: 'words-statistic/add-known-word',
  payload: word,
});

const addUnknownWord = (word) => ({
  type: 'words-statistic/add-unknown-word',
  payload: word,
});

const resetResults = () => ({
  type: 'words-statistic/reset-results',
});

export default { addKnownWord, addUnknownWord, resetResults };
