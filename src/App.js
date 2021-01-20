// import logo from './logo.svg';
import './App.scss';
import Card from './Card/Card';
import FormSign from './Form/Form';
import signes from './data/data';

function App() {
  return (
    <div>
      <h1 className="capitalize text-5xl text-center my-10">
        horoscope chinois
      </h1>
      <FormSign />
      <div className="App container flex flex-wrap items-stretch justify-center mx-auto mt-5">
        {signes.map((signe) => (
          <Card
            signImage={signe.img}
            signName={signe.nom}
            signDescription={signe.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
