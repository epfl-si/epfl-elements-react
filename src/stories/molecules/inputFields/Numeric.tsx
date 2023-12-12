import React from 'react';

interface NumericProps {
  size?: 'small' | 'medium' | 'large';
  isReadonly?: boolean;
  val?: number;
  placeholder?: string;
  min?: number;
  max?: number;
  label?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  help?: string;
  validationErrorMessage?: string;
  onChange?: (newValue: number) => void;
}

export const Numeric = ({
  size = 'medium',
  isReadonly = false,
  val,
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
  }: NumericProps) => {

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
          value={val}
          readOnly={isReadonly}
          required={isRequired}
          onChange={(event) => {
            if (onChange) onChange(parseInt(event.target.value, 10));
          }}
        />
        <div className="invalid-feedback">
          {validationErrorMessage}
        </div>
      </div>
      {help ? <small className="form-text text-muted">{help}</small> : <></>}
    </div>
    )
};
