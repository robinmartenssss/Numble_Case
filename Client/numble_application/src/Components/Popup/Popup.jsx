import "./Popup.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Thank You!</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
