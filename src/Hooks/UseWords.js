import { useState, useEffect } from "react";
import { get as getStorage, store } from "Utility/Storage";
import { generateRandomInteger } from "Utility/Number";
import { WORDS_STORAGE_KEY } from "Constant/Keys";

const useWords = () => {
  const [words, setWords] = useState([]),
    [word, setWord] = useState({}),
    get = () => {
      getStorage(WORDS_STORAGE_KEY, (words = []) => setWords(words));
    },
    edit = () => {
      const newTranslation = window.prompt("New translation:");
      newTranslation &&
        getStorage(WORDS_STORAGE_KEY, (words = []) => {
          const itemIndex = words.findIndex((item) => item.word === word.word);
          words[itemIndex].translation = newTranslation;
          try {
            store(WORDS_STORAGE_KEY, words);
            setWord(words[itemIndex]);
            window.alert("Word updated successfully!");
          } catch (error) {
            window.alert(error);
            throw new Error(error);
          }
        });
    },
    remove = () => {
      if (window.confirm("Are you sure?")) {
        getStorage(WORDS_STORAGE_KEY, (words = []) => {
          const itemIndex = words.findIndex((item) => item.word === word.word);
          words.splice(itemIndex);
          try {
            store(WORDS_STORAGE_KEY, words);
            setWords(words);
            window.alert("Word deleted successfully!");
          } catch (error) {
            window.alert(error);
            throw new Error(error);
          }
        });
      }
    };

  useEffect(get, []);

  useEffect(() => {
    if (words.length) {
      const randomIndex = generateRandomInteger(0, words.length - 1);
      setWord(words[randomIndex]);
    }
  }, [words]);

  return {
    words,
    word,
    get,
    edit,
    remove,
  };
};

export default useWords;
