import React, {useState} from 'react';

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
  suggestions: Item[];
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
    suggestions,
    onChange
  }: DropdownProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Item[]>(selected ? selected : []);

  let formControlStyle: string = 'form-control';
  switch (sizeDropDown) {
    case 'small':
      formControlStyle = formControlStyle.concat(' form-control-sm')
      break;
    case 'large':
      formControlStyle = formControlStyle.concat(' form-control-lg')
      break;
    default:
      break;
  }

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues: Item[] = Array.from(e.target.selectedOptions, (option) =>
      suggestions.find((item) => item.value === option.value)
    ) as Item[];

    setSelectedOptions(selectedValues);

    if (onChange) {
      onChange(selectedValues);
    }
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
              style={{minWidth: '130px'}}
              value={selectedOptions.map((option) => option.value)}
              onChange={handleSelectionChange}>
        <option value=""></option>
        {suggestions.map((c) => (
          <option value={c.value} key={c.value}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  )
};
