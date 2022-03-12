import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../../firebase-config";

import "./Home.scss";

export const Home = () => {
  //Fetch functionality
  const [words, setWords] = useState([]);
  const wordsCollectionsRef = collection(database, "words");

  const getWords = () => {
    const fetchWords = async () => {
      const data = await getDocs(wordsCollectionsRef);

      setWords(data.docs.map((doc) => ({ ...doc.data() })));
    };

    fetchWords();
  };

  //Push functionality
  const [word, setWord] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, settranslation] = useState("");

  const addWord = (event) => {
    event.preventDefault();

    const createWord = async () => {
      await addDoc(wordsCollectionsRef, {
        id: new Date().getTime(),
        word,
        transcription,
        translation
      });
    };

    createWord();
  };

  console.log(words);

  return (
    <div className="home-wrapper">
      <div className="home">
        <h1>Home page</h1>
        {/* <button onClick={getWords}>Push data into db</button>

        <form onSubmit={addWord}>
          <h2>Add word</h2>
          <input
            type="text"
            placeholder="word"
            onChange={({ target }) => setWord(target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="transcription"
            onChange={({ target }) => setTranscription(target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="translation"
            onChange={({ target }) => settranslation(target.value)}
          />
          <br />
          <button type="submit">Add word</button>
        </form> */}
      </div>
    </div>
  );
};
