import './index.css'

type CheckboxProps = {
  label?: string;
  onCheckboxChange?: any;
  isSelected?: boolean
}

export function Checkbox ({ label, isSelected, onCheckboxChange }: CheckboxProps) {

  return (
    <div className='form-check'>
      <label className='form-check-label'>
        <input
          type='checkbox'
          name={label}
          checked={isSelected}
          onChange={e => onCheckboxChange(e)}
          className='form-check-input'
        />
        <span className='checkbox-label'>{label}</span>
      </label>
    </div>
  )

}




