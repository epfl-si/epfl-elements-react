import { useState, useEffect, useRef } from 'react'
import { Checkbox } from './Checkbox'
import './index.css'

type CheckboxGroupProps = {
  id?: string;
  onChangeFn?: any;
  title?: string;
  options?: Array<string>;
  labels?: Array<string>;
  unchecked?:  Array<any>;
  wrapperClass?: string;
  containerClass?: string;
  checkboxLabelClass?: string
}

export function CheckboxGroup ({ onChangeFn, title, options, labels, unchecked = [], wrapperClass, containerClass, checkboxLabelClass }: CheckboxGroupProps) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allState, groupState])

  useEffect(() => {
    Object.keys(groupState).filter(x => !groupState[x]).length > 0 ? setAllState(false) : setAllState(true)
  }, [allState, groupState])  

  const handleCheckboxChange = (changeEvent: { target: { name: any; }; }) => {
    const { name } = changeEvent.target
    const realName = labels && labels.includes(name) ? options[labels.indexOf(name)] : name
    setGroupState({
      ...groupState,
      [realName]: !groupState[realName]
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

  const getOptionLabel = (option: string, i: number) => {
    if (!labels || !Array.isArray(labels)) {
      return option
    }
    if (labels[i]) {
      return labels[i];
    }
    return option
  }

  return (
    <div className={wrapperClass || 'checkboxgroup-wrapper'}>
      <div className='checkbox-group-label'>
        <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>{title}</span>
      </div>
      <div className={containerClass || 'checkbox-container'}>
        <Checkbox label='All' isSelected={allState} onCheckboxChange={handleToggleAll} checkboxLabelClass={checkboxLabelClass} />
        {options && options.map((option, i) =>
          <Checkbox
            key={`option-${i}`}
            isSelected={allState ? true : groupState[option]}
            onCheckboxChange={handleCheckboxChange}
            label={getOptionLabel(option, i)}
            checkboxLabelClass={checkboxLabelClass}
          />
        )}
      </div>
    </div>
  )
}

