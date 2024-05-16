import 'epfl-elements/dist/css/elements.min.css'

import './style.css'

type Callback = (label: string) => void;


export type TagProps = {
  id?: number;
  label?: string;
  href?: string;
  className?: string;
  removable?: boolean, 
  removeCallback?: Callback
}

export function Tag ({ id, label, href, className, removable, removeCallback }: TagProps) {

  const classNameToUse = className 
    ? `tag ${className}`
    : 'tag tag-primary'

  function removeTag () {
    if (removeCallback) {
      removeCallback(label)
    }
  }

  const getTag = () =>
    <a id={String(id)} href={href || `#${String(id)}`} className={classNameToUse}>{label}
    {removable && <a href={`#${String(id)}`} onClick={() => removeTag()} className="remove" tabIndex={-1} title="Remove">×</a>}
    </a>

  return (
    <>
      {label && getTag()}
    </>
  )
}
