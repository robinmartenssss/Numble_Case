import "./Popup.css";

const Popup = ({ title, message, showCloseButton = false, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>

        {showCloseButton && (
          <button className="popup-close-button" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
