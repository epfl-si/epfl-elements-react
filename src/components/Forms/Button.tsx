type Callback = (e: React.MouseEvent) => void;

type ButtonProps = {
  label?: string;
  onClickFn?: Callback
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
