import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({
  title, imgModal, contentModal, btnFunction, visibile,
}) => (
  <div className={visibile ? 'visible' : 'invisible'}>
    <div className="modal-overlay">
      <div
        className="modal pt-2 px-5 pb-3 rounded"
      >
        <h2 className="pb-2 mt-4">{title}</h2>
        <div className="m-2 mb-4">
          <button className="btn-modal" type="button" onClick={btnFunction}>
            X
          </button>
          <img
            className="w-1/2 rounded-full mx-auto"
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
  visibile: PropTypes.bool,
};

Modal.defaultProps = {
  imgModal: 'default-img.jpg',
  visibile: false,
};

export default Modal;
