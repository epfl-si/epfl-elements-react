import './index.css'

type Callback = (e: React.ChangeEvent<HTMLInputElement>) => void;

type CheckboxProps = {
  label?: string;
  onCheckboxChange?: Callback;
  isSelected?: boolean,
  checkboxLabelClass?: string
}

export function Checkbox ({ label, isSelected, checkboxLabelClass, onCheckboxChange }: CheckboxProps) {

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
        <span className={checkboxLabelClass || 'checkbox-label'}>{label}</span>
      </label>
    </div>
  )

}




