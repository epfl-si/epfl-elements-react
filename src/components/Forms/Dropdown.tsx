import { useState, useEffect, useRef } from 'react'

interface DropdownInnerProps {
  option: string;
  active?: boolean 
}

type DropdownProps = {
  label?: string;
  options?: Array<DropdownInnerProps>;
  onChangeFn?: any;
  placeholder?: string;
}

export function Dropdown ({ label, options, onChangeFn, placeholder }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeOption, setActiveOption] = useState(options.filter(x => x.active)[0]?.option || '')

  const dropdownRef = useRef(null);

  function localOnChange (e: any) {
    const selectedOption = e.target.innerText
    setActiveOption(selectedOption)
    setShowDropdown(false);
    onChangeFn(selectedOption);
    e.preventDefault();
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  return (
    <div className='dropdown' ref={dropdownRef}>
      <button
        className='btn btn-sm btn-secondary dropdown-toggle'
        type='button' id='dropdownMenuButton'
        data-toggle='dropdown'
        onClick={() => setShowDropdown(!showDropdown)}
        aria-haspopup='true'
        aria-expanded='false'
      >
        {label} {activeOption ? activeOption : placeholder || 'Select an option'}
      </button>
      <div
        className='dropdown-menu'
        aria-labelledby='dropdownMenuButton'
        style={{ display: showDropdown ? 'block' : 'none' }}
      >
        {(options || []).map((item, i) =>
          <a  
            key={`option-${i}`}
            className='dropdown-item'
            style={{
              fontSize: '0.92em'
            }}
            onClick={localOnChange}
            href='#'
          >
            {item.option}
          </a>)}
      </div>
    </div>
  )
}
