import '@epfl/epfl-elements-styles/dist/css/combined.css'

type LoaderProps = {
  message?: string;
}


export function Loader ({ message }: LoaderProps) {
  return (
    <div style={{
      width: '100%',
      height: '20px',
      textAlign: 'center',
      marginTop: '1em'
    }}
    >
      <span className='loader' /> <small>{message || 'Loading'}</small>
    </div>
  )
}
