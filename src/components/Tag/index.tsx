import '@epfl/epfl-elements-styles/dist/css/combined.css'

import './style.css'

type Callback = (label: string) => void;


export type TagProps = {
  label?: string;
  href?: string;
  className?: string;
  removable?: boolean, 
  removeCallback?: Callback
}

export function Tag ({ label, href, className, removable, removeCallback }: TagProps) {

  const classNameToUse = className 
    ? `tag ${className}`
    : 'tag tag-primary'

  function removeTag () {
    if (removeCallback) {
      removeCallback(label)
    }
  }

  const getTag = () =>
    <a href={href || 'javascript:void(0)'} className={classNameToUse}>{label}
    {removable && <a href="javascript:void(0)" onClick={() => removeTag()} className="remove" tabIndex={-1} title="Remove">×</a>}
    </a>

  return (
    <>
      {label && getTag()}
    </>
  )
}
