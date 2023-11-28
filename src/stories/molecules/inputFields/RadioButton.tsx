import React from 'react';
import '../../assets/custumStyles.css';

interface RadioButtonProps {
  isReadonly?: boolean;
  isChecked?: boolean;
  labelAndvalue: string;
  isRequired?: boolean;
  id: string;
  name: string;
  inLine?: boolean;
  onChange?: () => void;
}

export const RadioButton = ({
  isReadonly = false,
  isChecked,
  labelAndvalue,
  isRequired = false,
  id,
  name,
  inLine = false,
  onChange
}: RadioButtonProps) => {

  const inLineStyle = inLine ? 'form-check form-check-inline' : 'form-check';

  let result: React.ReactNode[] = [];
  const labels = labelAndvalue.split(';');
  labels.forEach(s => {
    const couple = s.split(':');
    result.push(
          <div className="form-check"><input
            className="form-check-input"
            type="radio"
            id={id}
            name={name}
            checked={isChecked}
            disabled={isReadonly}
            required={isRequired}
            value={couple[1] ? couple[1] : couple[0]}
          />
          <label className='form-check-label' htmlFor={id}>{couple[0]}</label></div>);
  });
  return <div className={inLineStyle}>{result}</div>;
};
