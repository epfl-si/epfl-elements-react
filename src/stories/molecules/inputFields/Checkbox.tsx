import React from 'react';

type Item = {
  label?: string;
  value: string;
  id: string;
  isChecked?: boolean;
};

interface CheckboxProps {
  isReadonly?: boolean;
  items: Item[];
  isRequired?: boolean;
  validationErrorMessage?: string;
  name: string;
  inLine?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checkboxName: string, isChecked: boolean) => void;
}

/**
 * A checkbox element.
 * The "items" array contains all the checkboxes details (label, value, id, isChecked).
 */
export const Checkbox = ({
    isReadonly = false,
    items,
    isRequired = false,
    validationErrorMessage,
    name,
    inLine = false,
    onChange
  }: CheckboxProps) => {
  const inLineStyle = inLine ? 'form-check form-check-inline' : 'form-check';

  const checkBoxes: React.ReactNode[] = [];
  items.map(i => {
      checkBoxes.push(<div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={i.id}
          name={name}
          checked={i.isChecked}
          disabled={isReadonly}
          required={isRequired}
          value={i.value}
          onChange={(e) => {
            if (onChange) {
              onChange(e, i.value, e.target.checked);
            }
          }}
        />
        <label className='form-check-label' htmlFor={i.id}>{i.label}</label>
        <div className="invalid-feedback">
          {validationErrorMessage}
        </div>
      </div>)
  })

  return <div className={inLineStyle}>{checkBoxes}</div>;
};
