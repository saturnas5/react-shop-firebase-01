import React from "react";
import './Forminput.scss';

const FormInput = ({handleChange, label, ...rest}) => {

    return (
        <div className="group">
            <input className="form-input" onChange={e => handleChange(e.target.value)} {...rest}/>
            {label ? (
                <label
                    className={`${
                        rest.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )

}

export default FormInput;
