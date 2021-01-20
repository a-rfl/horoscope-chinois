const Modal = ({ title, children, color }) => (
  <div className={`modal p-5 pb-3 rounded bg-${color}-300 border-gray-700 border-solid`}>
    <h2 className="text-2xl pb-5">{title}</h2>
    <div className="m-2 mb-4">{children}</div>
    <button className="py-1 px-3 bg-gray-200 rounded btn-modal">Fermer</button>
  </div>
);

export default Modal;
