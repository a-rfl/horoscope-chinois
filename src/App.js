import './App.scss';
import { useEffect, useRef, useState } from 'react';
import { get } from 'axios';
// Components
import Card from './components/Card/Card';
import FormSign from './components/Form/Form';
import Modal from './components/Modal/Modal';

function App() {
  const cardsRef = useRef();
  // let cards;
  const [signs, setSigns] = useState([]);
  // Fetch the data
  const urlRequest = 'https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json';
  useEffect(() => {
    /* -- Fetch -- */
    // fetch(urlRequest)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setSigns(data);
    //   });

    /* -- Axios -- */
    get(urlRequest).then((res) => {
      setSigns(res.data);
      // cards = cardsRef.current.children;
    });
  }, []);

  /* -- MODAL -- */
  // States Modal : Visibility & Content
  const [visibility, setVisibility] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', img: '' });
  // Click event function for the btn on cards
  const toggleModal = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
    if (e.target.id) {
      const idSignClicked = e.target.id.split('-')[1];
      const signClicked = signs[idSignClicked];
      setModalContent({
        title: signClicked.nom,
        content: signClicked.description,
        img: signClicked.img,
      });
    }
  };

  // Content App
  return (
    <main>
      <h1 className="capitalize text-center font-bold">
        horoscope chinois
      </h1>
      <FormSign label="Votre année de naissance" data={signs} />
      <section className="App flex flex-wrap mx-auto my-5" ref={cardsRef}>
        {signs.length !== 0
          ? signs.map((sign, index) => (
            <Card
              signImage={sign.img}
              signName={sign.nom}
              signDescription={sign.description}
              key={sign.id}
            >
              <button
                type="button"
                className="py-1 px-2 rounded mt-10 block"
                id={`btn-${index}`}
                onClick={toggleModal}
              >
                Voir plus
              </button>
            </Card>
          ))
          : 'loading...'}
      </section>
      <Modal
        title={modalContent.title}
        imgModal={modalContent.img}
        contentModal={modalContent.content}
        btnFunction={toggleModal}
        visibile={visibility}
      />
    </main>
  );
}

export default App;
