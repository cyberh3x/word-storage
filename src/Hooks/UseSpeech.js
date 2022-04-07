const useSpeech = () => {
  const speech = new SpeechSynthesisUtterance(),
    speak = (text) => {
      speech.text = text;
      window.speechSynthesis.speak(speech);
    };
  speech.lang = "en-US";

  return {
    speak,
  };
};

export default useSpeech;
