import giveSign from '../functions/giveSign';

const FormSign = () => {
  const callback = (e) => {
    e.preventDefault();
    const givenYear = document.getElementById('year').value;
    const textPlace = document.getElementById('yourSign');
    const sign = giveSign(givenYear);
    textPlace.innerHTML = `Vous êtes ${sign} !`;
  };

  return (
    <form className="form w-1/2 mx-auto text-center">
      <label htmlFor="year">Votre année de naissance</label>
      <input type="number" name="year" id="year" className="text-center mx-2 border-b-2 border-solid border-yellow-600" />
      <button
        type="submit"
        className="bg-yellow-400 py-1.5 px-2.5 mx-3 border-2 border-solid border-transparent rounded-md hover:text-yellow-400 hover:bg-white hover:border-yellow-400"
        onClick={callback}
      >
        Découvrez votre signe !
      </button>
      <p id="yourSign" className="inline mt-5 leading-10" />
    </form>
  );
};

export default FormSign;
