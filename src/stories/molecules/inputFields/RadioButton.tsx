import React from 'react';

interface RadioButtonProps {
  isReadonly?: boolean;
  isChecked?: boolean;
  labelAndvalue: string;
  isRequired?: boolean;
  id: string;
  name: string;
  inLine?: boolean;
  onChange?: (e: React.ChangeEvent, newVal: string) => void;
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
    const val = couple[1] ? couple[1] : couple[0];
    result.push(
          <div className="form-check"><input
            className="form-check-input"
            type="radio"
            id={id}
            name={name}
            checked={isChecked}
            disabled={isReadonly}
            required={isRequired}
            value={val}
            onChange={(e) => { if (onChange) onChange(e, val) }}
          />
          <label className='form-check-label' htmlFor={id}>{couple[0]}</label></div>);
  });
  return <div className={inLineStyle}>{result}</div>;
};
