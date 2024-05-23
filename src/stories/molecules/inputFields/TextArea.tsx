import React from 'react';

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
  onChange?: (newValue: string) => void;
}

/**
 * An textarea field.
 */
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
          key={id}
          name={name}
          minLength={minlength}
          maxLength={maxlength}
          placeholder={placeholder}
          value={value}
          readOnly={isReadonly}
          required={isRequired}
          rows={rows}
          cols={cols}
          style={{resize: 'both'}}
          onChange={(event) => {
            if (onChange) onChange(event.target.value);
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
