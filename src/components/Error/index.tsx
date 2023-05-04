import './index.css'

interface ErrorInnerProps {
  status: number,
  message: string
}

type ErrorProps = {
  error: ErrorInnerProps
}

export function Error ({ error }: ErrorProps) {
  return (
    <div id='primary' className='content-area'>
      <main id='main' className='site-main'>
        <section className='error-404 not-found'>
          <div className='page-content container'>
            {error.status && <p className='h1 mt-4 error-title'>{error.status}</p>}
            {error.message && <h1 className='h3 text-center'>{error.message}</h1>}
            {!error.message && <h1 className='h3 text-center'>Server error please try again</h1>}
          </div>
        </section>
      </main>
    </div>
  )
}
