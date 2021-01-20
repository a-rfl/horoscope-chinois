import { useState } from 'react';
import giveSign from '../functions/giveSign';

const FormSign = () => {
  const [signText, setSignText] = useState('');
  // const [card, setCard] = useState();

  const tellSign = (e) => {
    e.preventDefault();
    const givenYear = document.getElementById('year').value;
    const sign = giveSign(givenYear);
    setSignText(`Vous êtes ${sign} !`);

    let borderOn = false;
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.classList.contains('border-yellow-800')) {
        card.classList.remove('border-yellow-800');
        card.classList.remove('bg-red-100');
        card.classList.add('bg-yellow-100');
      }
    });
    const cardSign = document.getElementById(sign);
    if (!borderOn) {
      cardSign.classList.add('border-yellow-800');
      cardSign.classList.add('bg-red-100');
      cardSign.classList.remove('bg-yellow-100');
      borderOn = true;
    } else {
      borderOn = false;
    }
  };

  return (
    <form className="form w-2/3 mx-auto text-center">
      <label htmlFor="year">Votre année de naissance</label>
      <input
        type="number"
        name="year"
        id="year"
        className="text-center mx-2 border-b-2 border-solid border-yellow-600"
        min="1900"
      />
      <button
        type="submit"
        className="bg-yellow-400 py-1.5 px-2.5 mx-3 border-2 border-solid border-transparent rounded-md hover:text-yellow-400 hover:bg-white hover:border-yellow-400"
        onClick={tellSign}
      >
        Découvrez votre signe !
      </button>
      <p className="inline mt-5">{signText}</p>
    </form>
  );
};

export default FormSign;
