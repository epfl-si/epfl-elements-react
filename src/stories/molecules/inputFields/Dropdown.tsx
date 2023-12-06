import React from 'react';
import '../../assets/custumStyles.css';

type Item = {
  value: string;
  label: string;
}

interface DropdownProps {
  sizeDropDown?: 'small' | 'medium' | 'large';
  isReadonly?: boolean;
  label?: string;
  multiple?: boolean;
  visibleItems?: number;
  items: Item[];
}

export const Dropdown = ({
    visibleItems,
    sizeDropDown,
    isReadonly = false,
    multiple,
    label,
    items
  }: DropdownProps) => {

  const id = label?.trim().replace(/\s/g, '_');
  let formControlStyle: string = 'form-control';
  switch (sizeDropDown) {
    case 'small':
      formControlStyle = formControlStyle.concat(' form-control-sm')
      break;
    case 'large':
      formControlStyle = formControlStyle.concat(' form-control-lg')
      break;
  }
  return (
    <div className="form-group">
      <label className="control-label" htmlFor={id}>{label}</label>
      <select className={formControlStyle} id={id} name={id} placeholder={label} multiple={multiple}
              size={visibleItems} disabled={isReadonly} style={{minWidth: '130px'}}>
        <option value=""></option>
        {items.map((c, index) => (
          <option value={c.value}>{c.label}</option>
        ))}
      </select>
    </div>
  )
};
