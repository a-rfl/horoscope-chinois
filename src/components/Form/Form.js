import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import giveSign from '../../functions/giveSign';
import './Form.scss';

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
    <form className="form w-full text-center">
      <div className="form-content">
        <div>
          <label htmlFor="year">{label}</label>
          <input
            type="number"
            name="year"
            className="text-center mx-2 border-b-2 border-solid"
            min="1900"
            ref={yearRef}
          />
        </div>
        <button
          type="submit"
          className="py-1.5 px-2.5 mx-3 my-3 rounded-md box-border"
          onClick={tellSign}
        >
          Découvrez votre signe !
        </button>
      </div>
      <p className="sign">{signText}</p>
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
