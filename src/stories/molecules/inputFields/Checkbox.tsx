import React from 'react';
import '../../assets/custumStyles.css';

interface CheckboxProps {
  isReadonly?: boolean;
  isChecked?: boolean;
  label?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  validationErrorMessage?: string;
  onChange?: () => void;
}

export const Checkbox = ({
    isReadonly = false,
    isChecked,
    label,
    isRequired = false,
    id,
    name,
    validationErrorMessage,
    onChange
  }: CheckboxProps) => {

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
          />
          {label ? <label className='form-check-label' htmlFor={id}>{label}</label>
            : <></>}
          <div className="invalid-feedback">
            {validationErrorMessage}
          </div>
        </div>
  )
};
