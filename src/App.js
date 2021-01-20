// import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import Card from './Card/Card';
import FormSign from './Form/Form';
import signes from './data/data';
import Modal from './Modal/Modal';

function App() {
  const attrs = { modalClass: 'main-modal' };
  const [visibility, setVisibility] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [contentModal, setContentModal] = useState('');
  const toggleModal = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
    if (e.target.id) {
      const idSignClicked = e.target.id.split('-')[1];
      const signClicked = signes[idSignClicked];
      setTitleModal(signClicked.nom);
      setContentModal(signClicked.description);
    }
  };

  return (
    <div>
      <h1 className="capitalize text-5xl text-center my-10">
        horoscope chinois
      </h1>
      <FormSign />
      <div className="App container flex flex-wrap items-stretch justify-center mx-auto my-5">
        {signes.map((signe, index) => (
          <Card
            signImage={signe.img}
            signName={signe.nom}
            signDescription={signe.description}
          >
            <button type="button" className="bg-yellow-00 py-1 px-2 text-sm rounded mt-10 w-1/2 mx-auto block" id={`btn-${index}`} onClick={toggleModal}>Voir plus</button>
          </Card>
        ))}
      </div>
      <Modal title={titleModal} color="yellow" close {...attrs} visibile={visibility}>
        <button className="btn-modal" type="button" onClick={toggleModal}>X</button>
        {contentModal}
      </Modal>
    </div>
  );
}

export default App;
