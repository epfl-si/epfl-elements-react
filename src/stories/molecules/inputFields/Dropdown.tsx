import React, {useState} from 'react';
import '../../assets/custumStyles.css';

type Item = {
  value: string;
  label: string;
}

interface DropdownProps {
  sizeDropDown?: 'small' | 'medium' | 'large';
  isReadonly?: boolean;
  label?: string;
  id: string;
  multiple?: boolean;
  visibleItems?: number;
  items: Item[];
  selected?: Item[];
  onChange?: (selectedItems: Item[]) => void;
}

export const Dropdown = ({
    visibleItems,
    sizeDropDown = 'medium',
    isReadonly = false,
    selected = [],
    multiple = false,
    label,
    id,
    items,
    onChange
  }: DropdownProps) => {
  const [selectedOptions, setselectedOptions] = useState<Item[]>(selected ? selected : []);

  let formControlStyle: string = 'form-control';
  switch (sizeDropDown) {
    case 'small':
      formControlStyle = formControlStyle.concat(' form-control-sm')
      break;
    case 'large':
      formControlStyle = formControlStyle.concat(' form-control-lg')
      break;
  }

  const addSelected = (value: Item) => {
    if (multiple) {
      setselectedOptions([...selectedOptions, value]);
    } else {
      setselectedOptions([value]);
    }
  };

  const removeSelected = (value: Item) => {
    const updatedSelections = selectedOptions.filter(
      (selection) => selection !== value
    );
    setselectedOptions(updatedSelections);
  };

  return (
    <div className="form-group">
      <label className="control-label" htmlFor={id}>{label}</label>
      <select className={formControlStyle}
              id={id}
              name={id}
              placeholder={label ? label : ''}
              multiple={multiple ? multiple : false}
              size={visibleItems ? visibleItems : 1}
              disabled={isReadonly ? isReadonly : false}
              style={{minWidth: '130px'}}>
        <option value=""></option>
        {items.map((c) => (
          <option value={c.value}
                  selected={selectedOptions.includes(c)}
                  onClick={() => {selectedOptions.includes(c) ? removeSelected(c) : addSelected(c); if (onChange) onChange(selectedOptions);}}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  )
};
