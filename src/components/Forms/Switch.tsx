
import './index.css'
import { useState } from 'react';
type Callback = (e: React.ChangeEvent<HTMLInputElement>) => void;

type SwitchProps = {
  id?: string;
  label?: string;
  marginLeft?: string;
  onChangeCallback?: Callback;
  isChecked?: boolean
}

export function Switch ({ id, label, isChecked, marginLeft, onChangeCallback }: SwitchProps) {
  const [isCheckedLocal, setIsCheckedLocal] = useState(Boolean(isChecked))
  const idToUse = id ? id : Date.now().toString(30);

  function localChangeCallback (e: any) {
    if (onChangeCallback) {
      onChangeCallback(e.target.checked)
    }
    setIsCheckedLocal(!isCheckedLocal)
  }

  return (
    <div className="custom-control custom-switch" style={{marginLeft: marginLeft ? marginLeft : '1em'}}>
      <input 
        type="checkbox"
        className="custom-control-input"
        id={idToUse}
        checked={isCheckedLocal}
        onChange={localChangeCallback}
        />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
  )
}
