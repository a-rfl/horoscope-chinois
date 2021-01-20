import { useState } from 'react';
import giveSign from '../functions/giveSign';

const FormSign = () => {
  const [signText, setSignText] = useState(' ');

  const tellSign = (e) => {
    e.preventDefault();
    const givenYear = document.getElementById('year').value;
    const sign = giveSign(givenYear);
    setSignText(`Vous êtes ${sign} !`);

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.classList.contains('bg-yellow-200')) {
        card.classList.remove('bg-yellow-200');
      }
    });
    const cardSign = document.getElementById(sign);
    cardSign.classList.add('bg-yellow-200');
  };

  return (
    <form className="form w-full md:w-3/4 lg:w-2/3 mx-auto text-center">
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
        className="bg-yellow-400 py-1.5 px-2.5 mx-3 my-3 border-2 border-solid border-transparent rounded-md box-border hover:text-yellow-600 hover:bg-white hover:border-yellow-600"
        onClick={tellSign}
      >
        Découvrez votre signe !
      </button>
      <p className="leading-5 text-lg">{signText}</p>
    </form>
  );
};

export default FormSign;
