import "./Input.css";

const Input = ({ label, placeholder }) => {
  return (
    <div className="input-container">
      <label className="placeholder">{label}</label>
      <input className="input" placeholder={placeholder} />

      <i className={`fa-solid fa-circle-xmark clear-icon`}></i>
    </div>
  );
};

export default Input;
