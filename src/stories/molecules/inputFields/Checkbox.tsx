import React from 'react';
import '../../assets/custumStyles.css';

interface CheckboxProps {
  isReadonly?: boolean;
  isChecked?: boolean;
  labelAndvalue: string;
  isRequired?: boolean;
  id: string;
  name: string;
  validationErrorMessage?: string;
  onChange?: () => void;
}

export const Checkbox = ({
    isReadonly = false,
    isChecked,
    labelAndvalue,
    isRequired = false,
    id,
    name,
    validationErrorMessage,
    onChange
  }: CheckboxProps) => {


  const couple = labelAndvalue.split(':');

  return (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={id}
            name={name}
            checked={isChecked}
            disabled={isReadonly}
            required={isRequired}
            value={couple[1] ? couple[1] : couple[0]}
          />
          <label className='form-check-label' htmlFor={id}>{couple[0]}</label>
          <div className="invalid-feedback">
            {validationErrorMessage}
          </div>
        </div>
  )
};
