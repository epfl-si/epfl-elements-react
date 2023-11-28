import React from 'react';
import '../../assets/custumStyles.css';

interface TextAreaProps {
  size?: 'small' | 'medium' | 'large';
  isReadonly?: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  help?: string;
  minlength?: number;
  maxlength?: number;
  rows?: number;
  cols?: number;
  validationErrorMessage?: string;
  onChange?: () => void;
}

export const TextArea = ({
                       size = 'medium',
                       isReadonly = false,
                       value,
                       placeholder,
                       label,
                       isRequired = false,
                       id,
                       name,
                       help,
                       validationErrorMessage,
                       rows,
                       cols,
                       minlength,
                       maxlength,
                       onChange
                     }: TextAreaProps) => {

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
        <textarea
          className={formControlStyle}
          id={id}
          name={name}
          minLength={minlength}
          maxLength={maxlength}
          placeholder={placeholder}
          value={value}
          readOnly={isReadonly}
          required={isRequired}
          rows={rows}
          cols={cols}
        />
        <div className="invalid-feedback">
          {validationErrorMessage}
        </div>
      </div>
      {help ? <small className="form-text text-muted">{help}</small> : <></>}
    </div>
  )
};
