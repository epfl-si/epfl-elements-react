import { useState } from 'react'

type DropdownProps = {
  label?: string;
  options?: Array<any>;
  onChangeFn?: any
}


export function Dropdown ({ label, options, onChangeFn }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false)

  function localOnChange (e: any) {
    setShowDropdown(false)
    onChangeFn(e)
  }

  return (
    <div className='dropdown'>
      <button
        className='btn btn-sm btn-secondary dropdown-toggle'
        type='button' id='dropdownMenuButton'
        data-toggle='dropdown'
        onClick={() => setShowDropdown(!showDropdown)}
        aria-haspopup='true'
        aria-expanded='false'
      >
        {label} {(options || []).filter(x => x.active)[0].option}
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
            onClick={() => localOnChange(item.option)}
            href='#'
          >
            {item.option}
          </a>)}
      </div>
    </div>
  )
}
