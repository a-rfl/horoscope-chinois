import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import giveSign from '../functions/giveSign';

const FormSign = ({ data, label }) => {
  // Ref
  const yearRef = useRef();
  // State
  const [signText, setSignText] = useState(' ');

  // Click event function
  const tellSign = (e) => {
    e.preventDefault();
    const givenYear = yearRef.current.value;
    const sign = giveSign(givenYear, data);
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

  // Content
  return (
    <form className="form w-full md:w-3/4 lg:w-2/3 mx-auto text-center">
      <label htmlFor="year">{label}</label>
      <input
        type="number"
        name="year"
        className="text-center mx-2 border-b-2 border-solid border-yellow-600"
        min="1900"
        ref={yearRef}
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

FormSign.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
};

FormSign.defaultProps = {
  label: 'Label',
};

export default FormSign;
