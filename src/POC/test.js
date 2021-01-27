import { useState } from 'react';
import { getIndex } from '../functions/getIndex';

const Test = () => {
  const emojis = ['🐺', '🐲', '🐨', '🐗', '🏔', '🐼', '🔮', '🦔', '🤖'];
  const [emoji, setEmoji] = useState(emojis[0]);

  const getEmoji = () => {
    const emojiIndex = getIndex(emojis);
    setEmoji(emojis[emojiIndex]);
  };

  return (
    <div className="ml-5">
      <p className="text-2xl m-3">{emoji}</p>
      <button className="border-solid border-gray-700 border px-2 py-1" type="button" onClick={getEmoji}>Change emoji</button>
    </div>
  );
};

export default Test;
