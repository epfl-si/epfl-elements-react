import React from 'react';
import '../../assets/custumStyles.css';

interface RadioButtonProps {
  isReadonly?: boolean;
  isChecked?: boolean;
  label_s?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  validationErrorMessage?: string;
  inLine?: boolean;
  onChange?: () => void;
}

export const RadioButton = ({
  isReadonly = false,
  isChecked,
  label_s,
  isRequired = false,
  id,
  name,
  validationErrorMessage,
  inLine = false,
  onChange
}: RadioButtonProps) => {

  const inLineStyle = inLine ? 'form-check form-check-inline' : 'form-check';

  let result: React.ReactNode[] = [];
  if (label_s) {
    const labels = label_s.split(';');
    labels.forEach(s => {
      result.push(
            <div className="form-check"><input
              className="form-check-input"
              type="radio"
              id={id}
              name={name}
              checked={isChecked}
              disabled={isReadonly}
              required={isRequired}
              value={s}
            />
            <label className='form-check-label' htmlFor={id}>{s}</label></div>);
    });
  } else {
    result.push(
          <input
            className="form-check-input"
            type="radio"
            id={id}
            name={name}
            checked={isChecked}
            disabled={isReadonly}
            required={isRequired}
          />);
  }
  return <div className={inLineStyle}>{result}</div>;
};
