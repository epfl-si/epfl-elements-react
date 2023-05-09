
type Callback = (e: React.ChangeEvent<HTMLInputElement>) => void;

type InputProps = {
  placeholder?: string;
  onChangeFn?: Callback;
  type?: string
}

export function Input ({ placeholder, onChangeFn, type = 'text' }: InputProps) {
  return (
    <input
      type={type}
      className='form-control'
      style={{ fontSize: '0.95rem' }}
      placeholder={placeholder}
      onChange={e => onChangeFn(e)}
    />
  )
}

