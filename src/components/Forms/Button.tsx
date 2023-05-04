type ButtonProps = {
  label?: string;
  onClickFn?: any
}


export function Button ({ label, onClickFn }: ButtonProps) {
  return (
    <button
      className='btn btn-secondary'
      style={{ height: '2.5em' }}
      onClick={e => onClickFn(e)}
    >{label}
    </button>
  )
}
