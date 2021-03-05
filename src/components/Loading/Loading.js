import './Loading.scss';

const Loading = () => (
  <div className="loading">
    <p>Chargement</p>
    <div className="block-dot">
      <div className="dot" id="dot-1" />
      <div className="dot" id="dot-2" />
      <div className="dot" id="dot-3" />
    </div>
  </div>
);

export default Loading;
