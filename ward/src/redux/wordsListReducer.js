// import initialWordsList from '../data/words.json';

const initialWordsList = [
  {
    id: 1,
    word: "підприємець",
    translation: "entrepreneur",
    transcription: "/ˌɒntrəprəˈnɜːr/",
  },
  {
    id: 2,
    word: "бачити/розуміти",
    translation: "see",
  },
  {
    id: 3,
    word: "скарга",
    translation: "complaint",
  },
  {
    id: 4,
    word: "скаржитись",
    translation: "complain",
  },
  {
    id: 5,
    word: "забобон",
    translation: "superstition",
    transcription: "/ˌsuːpəˈstɪʃən/",
  },
  {
    id: 81,
    word: "не важливий",
    translation: "slight"
  }
];

export const wordsListReducer = (state = initialWordsList, action) => state;
