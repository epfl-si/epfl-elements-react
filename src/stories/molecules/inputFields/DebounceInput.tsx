import React, {useMemo, useRef, useState} from 'react';
import { FormControlProps } from 'react-bootstrap';
import './debounceInput.css';
import {debounce} from "p-debounce-throttle";
import type * as CSS from "csstype";

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

interface DebounceInputProps {
  input?: string;
  placeholder?: string;
  isReadonly?: boolean;
  onChange?: (inputValue: string) => void;
  style?: Style;
  className?: string;
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
   style = {},
   className,
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
    <div ref={inputRef} style={style} className={className}>
      <div style={{ position: 'relative' }}>
        <input className="debounceInput"
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
