import React from 'react';
import '../../assets/custumStyles.css';

type Item = {
  label?: string;
  value: string;
  id: string;
};

interface CheckboxProps {
  isReadonly?: boolean;
  isChecked?: boolean;
  items: Item[];
  isRequired?: boolean;
  validationErrorMessage?: string;
  onChange?: (e: React.ChangeEvent, newVal: string) => void;
}

export const Checkbox = ({
    isReadonly = false,
    isChecked = false,
    items,
    isRequired = false,
    validationErrorMessage,
    onChange
  }: CheckboxProps) => {

  return (
    items.map(i => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={i.id}
            name={i.id}
            checked={isChecked ? isChecked : false}
            disabled={isReadonly ? isReadonly : false}
            required={isRequired ? isRequired : false}
            value={i.value}
            onChange={(e) => { if (onChange) onChange(e, i.value) }}
          />
          <label className='form-check-label' htmlFor={i.id}>{i.label}</label>
          <div className="invalid-feedback">
            {validationErrorMessage}
          </div>
        </div>
      ))
  )
};
