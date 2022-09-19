import React from 'react'
import "./form-inputs.styles.scss"

const FormInput = ({label, ...otherProps}) => {
  return (
    <div>
         <label>{label}</label>
          <input {...otherProps}/>

    </div>
  )
}

export default FormInput