import { useState, useEffect, useRef } from 'react'
import { Checkbox } from './Checkbox'
import './index.css'

type CheckboxGroupProps = {
  onChangeFn?: any;
  title?: string;
  options?: Array<any>;
  unchecked?:  Array<any>;
  wrapperClass?: string;
  containerClass?: string
}

export function CheckboxGroup ({ onChangeFn, title, options, unchecked = [], wrapperClass, containerClass }: CheckboxGroupProps) {
  const [allState, setAllState] = useState(true)
  const [groupState, setGroupState] = useState((options || []).reduce(
    (options, option) => ({
      ...options,
      [option]: !unchecked.includes(option)
    }),
    {}
  ))
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false // toggle flag after first render/mounting
      return
    }
    const currentSelected = allState === true
      ? ['ALL', ...Object.keys(groupState)]
      : Object.keys(groupState).filter(x => groupState[x] === true)
    onChangeFn(currentSelected)
  }, [allState, groupState])

  useEffect(() => {
    Object.keys(groupState).filter(x => !groupState[x]).length > 0 ? setAllState(false) : setAllState(true)
  }, [allState, groupState]) // eslint-disable-line

  const handleCheckboxChange = (changeEvent: { target: { name: any; }; }) => {
    const { name } = changeEvent.target
    setGroupState({
      ...groupState,
      [name]: !groupState[name]
    })
  }

  const changeAllCheckBoxes = (newState: boolean) => {
    setGroupState((options || []).reduce(
      (options, option) => ({
        ...options,
        [option]: newState
      }),
      {}))
  }

  const handleToggleAll = () => {
    changeAllCheckBoxes(!allState)
    setAllState(!allState)
  }

  return (
    <div className={wrapperClass || 'checkboxgroup-wrapper'}>
      <div className='checkbox-group-label'>
        <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>{title}</span>
      </div>
      <div className={containerClass || 'checkbox-container'}>
        <Checkbox label='All' isSelected={allState} onCheckboxChange={handleToggleAll} />
        {options && options.map((option, i) =>
          <Checkbox
            key={`option-${i}`}
            isSelected={allState ? true : groupState[option]}
            onCheckboxChange={handleCheckboxChange}
            label={option}
          />
        )}
      </div>
    </div>
  )
}

