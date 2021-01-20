const Modal = ({
  title, children, color, close,
}) => (
  <div className="modal-overlay">
    <div
      className={`modal pt-2 px-5 pb-3 rounded bg-${color}-300 border-gray-700 border-solid`}
    >
      {close ? <button className="btn-modal" type="button">X</button> : null }
      <h2 className="text-2xl pb-5">{title}</h2>
      <div className="m-2 mb-4">{children}</div>
    </div>
  </div>
);

export default Modal;
