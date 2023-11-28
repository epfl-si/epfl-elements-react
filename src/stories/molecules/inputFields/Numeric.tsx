import React from 'react';
import '../../assets/custumStyles.css';

interface NumericFieldProps {
  size?: 'small' | 'medium' | 'large';
  isReadonly?: boolean;
  value?: number;
  placeholder?: string;
  min?: number;
  max?: number;
  label?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  help?: string;
  validationErrorMessage?: string;
  onChange?: () => void;
}

export const Numeric = ({
  size = 'medium',
  isReadonly = false,
  value,
  placeholder,
  min,
  max,
  label,
  isRequired = false,
  id,
  name,
  help,
  validationErrorMessage,
  onChange
  }: NumericFieldProps) => {

  let formControlStyle: string = 'form-control';
  switch (size) {
    case 'small':
      formControlStyle = formControlStyle.concat(' form-control-sm')
      break;
    case 'large':
      formControlStyle = formControlStyle.concat(' form-control-lg')
      break;
  }

  const requiredStyle = isRequired ? 'form-group required' : 'form-group';

  return (
    <div className={requiredStyle}>
      {label ? <label className='control-label' htmlFor={id}>{label}</label> : <></>}
      <div className="input-group has-validation">
        <input
          className={formControlStyle}
          type="number"
          id={id}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          value={value}
          readOnly={isReadonly}
          required={isRequired}
        />
        <div className="invalid-feedback">
          {validationErrorMessage}
        </div>
      </div>
      {help ? <small className="form-text text-muted">{help}</small> : <></>}
    </div>
    )
};
