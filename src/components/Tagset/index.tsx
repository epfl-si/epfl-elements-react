import { useState, useRef, SetStateAction, Key } from 'react'
import { Tag } from '../Tag'

import '@epfl/epfl-elements-styles/dist/css/combined.css'
import './styles.css'

import { TagProps } from '../Tag'

export type TagsetProps = {
  tags?: Array<TagProps>;
  callbackFn?: any;
  addLabel?: string;
  className?: string;
  tagSpacing?: string;
  addNewPosition?: string;
  showInColumns?: boolean;
  disableEdit?: boolean;
}

export function Tagset ({
  tags = [],
  callbackFn,
  className,
  addLabel = 'Add new tag',
  tagSpacing = '2px',
  addNewPosition = 'bottom',
  showInColumns = false,
  disableEdit = false
}: TagsetProps) {
  const inputRef = useRef(null)
  const [localTags, setLocalTags] = useState(tags)

  function updateTagset (updatedTags: SetStateAction<any[]>, mutationOperation: { operation: string; label: any }) {
    if (callbackFn) {
      callbackFn({
        tags: updatedTags,
        operation: mutationOperation
      })
    }
    setLocalTags(updatedTags)
  }

  function handleChange (event: any) {
    if (event.key === 'Enter') {
      handleUpdate(event.target.value)
      // @ts-ignore
      inputRef.current.value = ''
    }
  }

  function handleDelete (tagLabel: any) {
    const updatedTags = localTags.filter(tag => tag.label !== tagLabel)
    const mutationOperation = {
      operation: 'delete',
      label: tagLabel
    }
    updateTagset(updatedTags, mutationOperation)
  }

  function handleUpdate (tagLabel: any) {
    const checkTags = localTags.filter(tag => tag.label === tagLabel)
    // The tag is already there.
    if (checkTags.length > 0) {
      return
    }
    const mutationOperation = {
      operation: 'add',
      label: tagLabel
    }
    const updatedTags = [...localTags, { label: tagLabel, value: tagLabel }]
    updateTagset(updatedTags, mutationOperation)
  }

  const getAddInput = () =><input
    type='text'
    className='add-tag'
    ref={inputRef}
    placeholder={addLabel}
    onKeyDown={handleChange} />

  const getTag = (tag: TagProps, i: Key | null | undefined) => {
    if (showInColumns) {
      return <div key={`span-${i}`}>
    {disableEdit
      ? <Tag key={i} label={tag.label} className={className} />
      : <Tag key={i} label={tag.label} className={className} removable removeCallback={handleDelete} />}
      </div>
    }

    return <span key={`span-${i}`} style={{marginRight: tagSpacing }}>
    {disableEdit
      ? <Tag key={i} label={tag.label} className={className} />
      : <Tag key={i} label={tag.label} className={className} removable removeCallback={handleDelete} />}
  </span>
  }

  const getTagSet = () =>
    <div className={showInColumns ? 'tagset-wrapper grid-container' : 'tagset-wrapper'}>
      {!disableEdit && addNewPosition === 'top' && [
        getAddInput(),
        <hr className='add-tag-separator' />]}
      {localTags && localTags.map(
        (tag, i) => getTag(tag, i))}
      {!disableEdit && addNewPosition === 'bottom' && getAddInput()}
    </div>

  return (
    <>
      {localTags && getTagSet()}
    </>
  )
}
