const giveSign = (year, data) => {
  const moduloYear = year % 12;
  const searchModulo = (item) => item.id === moduloYear;
  const signFound = data.filter(searchModulo);
  return signFound[0].nom;
};

export default giveSign;
