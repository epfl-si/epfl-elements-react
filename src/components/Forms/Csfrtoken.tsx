import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

type CsfrToken = {
  tokenName?: string;
  inputName?: string
}

export function CsfrToken ({ tokenName = 'csrftoken', inputName = 'csrfmiddlewaretoken' }) {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    const cookietoken = Cookies.get(tokenName)
    setToken(cookietoken)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTokenInput = () =>
    <input
      type='hidden'
      name={inputName}
      value={token}
    />

  return (
    <>
      {token && getTokenInput()}
    </>
  )
}

