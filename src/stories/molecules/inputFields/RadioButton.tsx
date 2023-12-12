import React from 'react';

type Item = {
  label?: string;
  value: string;
  id: string;
  isChecked?: boolean;
};

interface RadioButtonProps {
  isReadonly?: boolean;
  isRequired?: boolean;
  name: string;
  inLine?: boolean;
  items: Item[];
  onChange?: (e: React.ChangeEvent, newVal: string) => void;
}

export const RadioButton = ({
  isReadonly = false,
  isRequired = false,
  name,
  inLine = false,
  items,
  onChange
}: RadioButtonProps) => {

  const inLineStyle = inLine ? 'form-check form-check-inline' : 'form-check';

  const radios: React.ReactNode[] = [];
  items.map(i => {
    radios.push(
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id={i.id}
          name={name}
          checked={i.isChecked}
          disabled={isReadonly}
          required={isRequired}
          value={i.value}
          onChange={(e) => { if (onChange) onChange(e, i.value) }}
        />
        <label className='form-check-label' htmlFor={i.id}>{i.label}</label>
      </div>)
  })

  return <div className={inLineStyle}>{radios}</div>;
};
