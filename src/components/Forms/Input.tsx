type InputProps = {
  placeholder?: string;
  onChangeFn?: any;
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

