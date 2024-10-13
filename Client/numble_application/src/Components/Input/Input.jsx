import "./Input.css";

const Input = ({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  alwaysShowCheck,
  minLength = 0,
  alwaysValid,
}) => {
  const isValidLength = value.length >= minLength;
  return (
    <div className="input-container">
      <label className="placeholder">{label}</label>
      <input
        className={`input ${error ? "error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <i
        className={`fa-solid ${
          alwaysShowCheck
            ? "fa-circle-check"
            : (value && isValidLength) || alwaysValid
            ? "fa-circle-check"
            : "fa-circle-xmark"
        } clear-icon`}
      ></i>
    </div>
  );
};

export default Input;
