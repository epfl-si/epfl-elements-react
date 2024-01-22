import React, {useMemo, useRef, useState} from 'react';
import { FormControlProps, Form } from 'react-bootstrap';
import './autocomplete.css';
import {debounce} from "p-debounce-throttle";

interface DebounceInputProps {
  input?: string;
  placeholder?: string;
  isReadonly?: boolean;
  onChange?: (inputValue: string) => void;
}

/**
 * An autocomplete list with debounce query.
 *
 * If single selection: the selected element is directly shown in the input field.
 * The "itemValue", if present, is the initialization value.
 *
 * For multiple selections: selected elements are shown above the input list and it is possible to delete them.
 * The "selected" prop contains all selected items.
 */
export const DebounceInput = ({
   input = '',
   placeholder = '',
   isReadonly = false,
   onChange
  }: DebounceInputProps & FormControlProps) => {
  const [inputValue, setInputValue] = useState(input);
  const inputRef = useRef<HTMLDivElement>(null);

  const debouncedCallback = useMemo(() => {
    const func = (value: string) => {
        onChange?.(value);
    };

    return debounce(func, 500);
  }, [onChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedCallback(value);
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
      </div>
    </div>
  );
};
