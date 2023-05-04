
import { useState }  from 'react';
import '@epfl/epfl-elements-styles/dist/css/combined.css'

type Callback = () => void;

type AlertProps = {
    title: string;
    message: string;
    alertType: string;
    onCloseClick?: Callback;
};

export function Alert ({ title = '', message = '', alertType = 'info', onCloseClick}: AlertProps) {
  const [showAlert, setShowalert] = useState(true)

  const getClassName = () => `alert alert-${alertType} alert-dismissible fade show`

  const onClickLocal = () => {
    setShowalert(false)
    if (onCloseClick) {
      onCloseClick()
      return
    }
  }

  return (
    <>
      {showAlert && <div className={getClassName()} role='alert'>
        <strong>{title}</strong> {message}
        <button type='button' className='close' data-dismiss='alert' aria-label='Close' onClick={onClickLocal}>
          <span aria-hidden='true'>&times;</span>
        </button>
        </div>}
    </>
  )
}
