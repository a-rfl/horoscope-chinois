import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  signName, signDescription, signImage, children,
}) => {
  let minDes = '';
  const truncate = (str) => {
    if (str.length <= 150) {
      minDes = str;
    } else {
      const idx = (str.slice(150, str.length)).indexOf(' ');
      minDes = `${str.substring(0, 150 + idx)} ...`;
    }
    return minDes;
  };

  return (
    <div className="card rounded-md box-border" id={signName}>
      <h2 className="uppercase font-bold">{signName}</h2>
      <img className="w-1/2 rounded-full mx-auto my-4" src={`img/${signImage}`} alt={`Signe du ${signName}`} />
      <div>
        <p>{truncate(signDescription)}</p>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  signImage: PropTypes.string.isRequired,
  signName: PropTypes.string.isRequired,
  signDescription: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
