import React, { useEffect, useRef, useState } from 'react';
import { FormControlProps, Form } from 'react-bootstrap';
import featherIcons from "epfl-elements/dist/icons/feather-sprite.svg";
import './autocomplete.css';

type Item = {
  label: string;
  value: string;
};

interface AutocompleteProps {
  suggestions: Item[];
  selected?: Item[];
  multiple?: boolean;
  itemValue?: Item;
  placeholder?: string;
  isReadonly?: boolean;
  onChange?: (selectedItems: Item[]) => void;
}

/**
 * An autocomplete list.
 *
 * If single selection: the selected element is directly shown in the input field.
 * The "itemValue", if present, is the initialization value.
 *
 * For multiple selections: selected elements are shown above the input list and it is possible to delete them.
 * The "selected" prop contains all selected items.
 */
export const Autocomplete: React.FC<AutocompleteProps & FormControlProps> = ({
   suggestions,
   selected = [],
   multiple = false,
   itemValue,
   placeholder = '',
   isReadonly = false,
  onChange
  }: AutocompleteProps & FormControlProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState(itemValue ? itemValue.label : '');
  const [selectedSuggestions, setSelectedSuggestions] = useState<Item[]>(selected ? selected : []);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setFilteredSuggestions([]);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (value: Item) => {
    if (multiple) {
      setInputValue('');
      setSelectedSuggestions([...selectedSuggestions, value]);
    } else {
      setInputValue(value.label);
      setSelectedSuggestions([value]);
      setFilteredSuggestions([]);
    }
    if (onChange) {
      onChange(selectedSuggestions)
    }
  };

  const removeSelected = (value: Item) => {
    const updatedSelections = selectedSuggestions.filter(
      (selection) => selection !== value
    );
    setSelectedSuggestions(updatedSelections);
  };

  return (
    <div ref={inputRef}>
      <div style={{ position: 'relative' }}>
        <Form.Control
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          disabled={isReadonly}
          placeholder={placeholder}
        />
        {filteredSuggestions.length > 0 && (
          <ul className="list-group dropdown-list">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => {handleSuggestionClick(suggestion);
                  }}
                style={{ cursor: 'pointer', display: selectedSuggestions.find(s => s.value === suggestion.value) ? 'none' : 'block',}}
              >
                {suggestion.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {multiple && selectedSuggestions.length > 0 && (
        <div className="selected-items">
          <ul className="list-group">
            {selectedSuggestions.map((selected, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                <div style={{ width: '100%' }} >
                  {selected.label}
                  {isReadonly ?
                    <svg className="icon feather icon-right-disabled" aria-hidden="true">
                      <use xlinkHref={`${featherIcons}#trash-2`}></use>
                    </svg>
                    :
                    <svg className="icon feather icon-right" aria-hidden="true"
                                        onClick={() => {removeSelected(selected);
                                          if (onChange) {
                                            onChange(selectedSuggestions)
                                          }}}>
                    <use xlinkHref={`${featherIcons}#trash-2`}></use>
                  </svg>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
