import signes from '../data/data';

const giveSign = (year) => {
  const moduloYear = year % 12;
  const searchModulo = (item) => item.modulo === moduloYear;
  const signFound = signes.filter(searchModulo);
  return signFound[0].nom;
};

export default giveSign;
