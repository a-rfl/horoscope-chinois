const Card = ({ signName, signDescription, signImage }) => (
  <div className="card mx-5 my-5 mx-1 p-4 w-2/3 md:w-1/3 lg:w-1/5 bg-yellow-100 rounded-md">
    <h2 className="text-2xl uppercase text-yellow-700 font-extrabold">{signName}</h2>
    <img className="w-1/2 rounded-full mx-auto my-4" src={`img/${signImage}`} alt={`Signe du ${signName}`} />
    <p>{signDescription}</p>
  </div>
);

export default Card;
