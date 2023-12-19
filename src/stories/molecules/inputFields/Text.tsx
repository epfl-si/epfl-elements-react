import React from 'react';

interface TextProps {
  size?: 'small' | 'medium' | 'large';
  isReadonly?: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  help?: string;
  type: 'text' | 'tel' | 'email' | 'password' | 'url';
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  validationErrorMessage?: string;
  onChange?: (newValue: string) => void;
}

/**
 * A text field.
 * It could be a simple text, a telephone number, an email address, a password, an url
 */
export const Text = ({
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
                          type,
                          minlength,
                          maxlength,
                          pattern,
                          onChange
                        }: TextProps) => {

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
          type={type}
          id={id}
          name={name}
          minLength={minlength}
          maxLength={maxlength}
          pattern={pattern}
          placeholder={placeholder}
          value={value}
          readOnly={isReadonly}
          required={isRequired}
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
