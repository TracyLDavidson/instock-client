import "../Textbox/Textbox.scss";

/*
  Text Box component 
*/

const Textbox = ({ label, name, placeholder, onchange, value, classname }) => {
  return (
    <div className="textbox">
      <label className="textbox__label">{label}</label>
      <div className="textbox__container">
        <input
          className={`textbox__text ${classname}`}
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={onchange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Textbox;
