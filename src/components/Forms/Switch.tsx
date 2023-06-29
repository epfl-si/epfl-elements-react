
import './index.css'
type Callback = (e: React.ChangeEvent<HTMLInputElement>) => void;

type SwitchProps = {
  id: string;
  label?: string;
  marginLeft?: string;
  onChangeCallback?: Callback;
  isChecked?: boolean
}

export function Switch ({ id, label, isChecked, marginLeft, onChangeCallback }: SwitchProps) {

  function localChangeCallback (e: any) {
    if (onChangeCallback) {
      onChangeCallback(e.target.checked)
    }
  }

  return (
    <div className="custom-control custom-switch" style={{marginLeft: marginLeft ? marginLeft : '1em'}}>
      <input 
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={isChecked}
        onChange={localChangeCallback}
        />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
  )
}
