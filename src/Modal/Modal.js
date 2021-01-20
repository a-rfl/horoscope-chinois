const Modal = ({
  title, children, color, visibile,
}) => (
  <div className={visibile ? 'visible' : 'invisible'}>
    <div className="modal-overlay">
      <div
        className={`modal pt-2 px-5 pb-3 rounded bg-${color}-400 border-gray-700 border-solid w-1/4`}
      >
        <h2 className="text-2xl pb-5 mt-4">{title}</h2>
        <div className="m-2 mb-4">{children}</div>
      </div>
    </div>
  </div>
);

export default Modal;
