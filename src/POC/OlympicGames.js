import { useState } from 'react';

const OlympicGames = () => {
  const [belgiumMedals, setBelgiumMedals] = useState(0);
  const [franceMedals, setFranceMedals] = useState(0);
  const [koreaMedals, setKoreaMedals] = useState(0);
  const [usaMedals, setUsaMedals] = useState(0);
  const [laosMedals, setLaosMedals] = useState(0);

  const results = [
    {
      id: 0,
      country: 'Belgique',
      numMedals: belgiumMedals,
      setMedals: setBelgiumMedals,
    },
    {
      id: 1,
      country: 'France',
      numMedals: franceMedals,
      setMedals: setFranceMedals,
    },
    {
      id: 2,
      country: 'Corée',
      numMedals: koreaMedals,
      setMedals: setKoreaMedals,
    },
    {
      id: 3,
      country: 'USA',
      numMedals: usaMedals,
      setMedals: setUsaMedals,
    },
    {
      id: 4,
      country: 'Laos',
      numMedals: laosMedals,
      setMedals: setLaosMedals,
    },
  ];

  const getScores = (arr) => {
    const score = [];
    arr.forEach((el) => {
      score.push(el.numMedals);
    });
    return score;
  };

  const updateWinners = () => {
    const scores = getScores(results);
    const maxScore = Math.max(...scores);
    const winners = [];
    results.forEach((team) => {
      if (maxScore !== 0) {
        if (team.numMedals === maxScore) {
          winners.push(team.country);
        }
      }
    });

    return winners.join(', ');
  };

  return (
    <div className="w-100">
      <div className="flex">
        {
          results.map((team) => (
            <div className="w-1/5 mx-auto mt-10 text-center">
              <p>{team.country}</p>
              <p>{team.numMedals}</p>
              <button className="border-solid border-gray-700 border rounded mt-3 px-2 py-1 text-center text-white bg-indigo-400" type="button" onClick={() => team.setMedals(team.numMedals + 1)}>{team.country}</button>
            </div>
          ))
        }
      </div>
      <div className="text-xl text-center uppercase mt-10 mx-auto w-1/2">{updateWinners()}</div>
    </div>
  );
};

export default OlympicGames;
