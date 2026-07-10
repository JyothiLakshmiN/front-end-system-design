import { useState } from "react";

const emojiPromise = import(
  /* webpackPrefetch: true, webpackChunkName: "emoji" */
  "./Emoji"
);

const App = () => {
  const [showEmoji, toggleEmoji] = useState(false);
  const [EmojiPicker, setEmojiPicker] = useState(null);


  const handleClick = () => {
    emojiPromise
      .then((module) => {
        setEmojiPicker(() => module.default);
        toggleEmoji(true);
      });
  };


  return (
    <div>
      <h1>Webpack Prefetch</h1>

      <button onClick={handleClick}>
        Show Emoji
      </button>

      {showEmoji && EmojiPicker && <EmojiPicker />}
    </div>
  );
};

export default App;