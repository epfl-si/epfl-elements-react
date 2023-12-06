import React, { useEffect, useRef, useState } from 'react';
import { FormControlProps, Form } from 'react-bootstrap';
import featherIcons from "../../assets/elements-dist-frontend/icons/feather-sprite.svg";

type Item = {
  label: string;
  value: string;
};

interface AutocompleteProps {
  suggestions: Item[];
  selected?: Item[];
  multiple?: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps & FormControlProps> = ({
   suggestions,
   selected,
   multiple = false,
   ...rest
  }: AutocompleteProps & FormControlProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedSuggestions, setSelectedSuggestions] = useState<Item[]>(selected? selected : []);
  const inputRef = useRef<HTMLInputElement>(null);

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
      setFilteredSuggestions([]);
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
          {...rest}
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Type something..."
        />
        {filteredSuggestions.length > 0 && (
          <ul className="list-group" style={{ position: 'absolute', zIndex: 1 }}>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => handleSuggestionClick(suggestion)}
                style={{ cursor: 'pointer', display: selectedSuggestions.find(s => (s.value === suggestion.value)) ? 'none' : 'block',}}
              >
                {suggestion.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {multiple && selectedSuggestions.length > 0 && (
        <div>
          <ul className="list-group">
            {selectedSuggestions.map((selected, index) => (
              <li
                key={index}
                className="list-group-item"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {selected.label}
                  <svg className="icon feather" aria-hidden="true"
                       style={{ cursor: 'pointer' }}
                       onClick={() => removeSelected(selected)}>
                    <use xlinkHref={`${featherIcons}#trash-2`}></use>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
