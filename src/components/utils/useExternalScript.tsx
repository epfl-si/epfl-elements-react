import { useState, useEffect } from 'react'

// Based on Hook from https://usehooks.com/useScript/
export function useExternalScript (src: string) {
  // Keep track of script status (true or false)
  const [status, setStatus] = useState(false)

  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus(false)
        return
      }

      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      // let script = document.querySelector(`script[src="${src}"]`)
      let script: Element | null = null
      if (status) {
        script = document.querySelector(`script[src="${src}"]`)
      }

      if (!script) {
        // Create script
        script = document.createElement('script')
        // @ts-ignore
        script.src = src
        // @ts-ignore
        script.async = true
        script.setAttribute('data-status', 'loading')
        // Add script to document body
        document.body.appendChild(script)

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event: { type: string }) => {
          // @ts-ignore
          script.setAttribute(
            'data-status',
            event.type === 'load' ? 'ready' : 'error'
          )
        }

        script.addEventListener('load', setAttributeFromEvent)
        script.addEventListener('error', setAttributeFromEvent)
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status') === 'load')
      }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: { type: string }) => {
        setStatus(event.type === 'load')
      }

      // Add event listeners
      script.addEventListener('load', setStateFromEvent)
      script.addEventListener('error', setStateFromEvent)

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent)
          script.removeEventListener('error', setStateFromEvent)
        }
      }
    },
    [src] // Only re-run effect if script src changes
  )

  return status
}
