import PropTypes from 'prop-types';

const Modal = ({
  title, imgModal, contentModal, btnFunction, color, visibile,
}) => (
  <div className={visibile ? 'visible' : 'invisible'}>
    <div className="modal-overlay">
      <div
        className={`modal pt-2 px-5 pb-3 rounded bg-${color}-400 border-gray-700 border-solid w-1/4`}
      >
        <h2 className="text-2xl pb-5 mt-4">{title}</h2>
        <div className="m-2 mb-4">
          <button className="btn-modal" type="button" onClick={btnFunction}>
            X
          </button>
          <img
            className="w-1/2 rounded-full mx-auto my-4"
            src={`img/${imgModal}`}
            alt={`Signe du ${title}`}
          />
          <p>{contentModal}</p>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  imgModal: PropTypes.string,
  contentModal: PropTypes.string.isRequired,
  btnFunction: PropTypes.func.isRequired,
  color: PropTypes.string,
  visibile: PropTypes.bool,
};

Modal.defaultProps = {
  color: 'yellow',
  imgModal: 'default-img.jpg',
  visibile: false,
};

export default Modal;
