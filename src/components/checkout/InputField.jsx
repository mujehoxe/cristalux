
const InputField = ({ type, placeholder, maxLength, minLength, value, onChange }) => {
  return (
    <>
      <input
        className=" uppercase"
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        onChange={onchange}
        required
      />
    </>
  );
};

export default InputField;
