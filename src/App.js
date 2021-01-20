// import logo from './logo.svg';
import './App.scss';
import Card from './Card/Card';
import FormSign from './Form/Form';
import signes from './data/data';
import Modal from './Modal/Modal';

function App() {
  const attrs = { modalClass: 'main-modal', visible: true };

  return (
    <div>
      <h1 className="capitalize text-5xl text-center my-10">
        horoscope chinois
      </h1>
      <FormSign />
      <div className="App container flex flex-wrap items-stretch justify-center mx-auto my-5">
        {signes.map((signe) => (
          <Card
            signImage={signe.img}
            signName={signe.nom}
            signDescription={signe.description}
          />
        ))}
      </div>
      <Modal title="Titre modal 1" color="purple" close {...attrs}>
        Texte de la <strong>modale</strong>. Suite du texte.
      </Modal>
      <Modal title="Titre modal 2" color="red" close {...attrs}>
        Texte de la <strong>modale</strong>. Suite du texte.
      </Modal>
      <Modal title="Titre modal 3" color="blue" close {...attrs}>
        Texte de la <strong>modale</strong>. Suite du texte.
      </Modal>
    </div>
  );
}

export default App;
