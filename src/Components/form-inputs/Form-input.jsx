import React from "react";
import "./form-inputs.styles.scss";

const FormInput = ({ label, inputOptions, loginOptions }) => {
  return (
    <div className="group">
       <input className="form-input" {...inputOptions} {...loginOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
     
    </div>
  );
};

export default FormInput;
