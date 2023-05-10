import { useState, useEffect } from 'react'

import { Input } from '../Forms/Input'
import { CheckboxGroup } from '../Forms/CheckboxGroup'

type FilterBoxProps = {
  data?: Array<any>;
  updateFn?: any;
  filterFields?: Array<any>;
  filterLabels?: Array<any>;
  disabledOptions?: any;
  searchbox?: any
}

// Reusih lodash filter
function filter(array: any, predicate: any) {
  let index = -1
  let resIndex = 0
  const length = array == null ? 0 : array.length
  const result = []

  while (++index < length) {
    const value = (array|| [])[index]
    if (predicate(value, index, array)) {
      result[resIndex++] = value
    }
  }
  return result
}


export function FilterBox ({
  data,
  filterFields = [],
  filterLabels = [],
  disabledOptions = {},
  searchbox,
  updateFn
}: FilterBoxProps) {
  const [boxfilters, setboxFilters] = useState({})
  const [filteredCopy, setFilteredCopy] = useState<Array<any> | null>(null)

  function setLocalData () {
    if (Object.keys(boxfilters).length === 0) {
      return
    }
    const filters = filter(filterFields,
      (x: string) => boxfilters[x])
      .map(field =>
        (        val: { [x: string]: any; }) => {
          return boxfilters[`${field}`].includes('ALL') || boxfilters[`${field}`].includes(val[`${field}`])
        }
      )
    const filteredData = filter(data, (item: { [x: string]: any; }) => {
      const testResults = filters.map(fn => fn(item))
      return !testResults.includes(false)
    })
    updateFn(filteredData)
    setFilteredCopy(filteredData)
  }

  function filterCheck (searchFields: any[], item: { [x: string]: any; }, value: string) {
    const testResults = searchFields.map((field: string | number) => String(item[field]).toLowerCase().includes(value)).filter((x: any) => x)
    return testResults.length > 0
  }

  function searchLocal (value: string) {
    const dataToSearch = filteredCopy || data
    const lowerValue = value.toLowerCase()
    const filteredData = filter(dataToSearch, (item: { [x: string]: any; }) => filterCheck(searchbox.fields, item, lowerValue))
    updateFn(filteredData)
  }

  useEffect(() => {
    boxfilters &&
    setLocalData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxfilters])

  const getFilterOptions = (field: string | number) => Array.from(new Set((data || []).map(i => i[field]))).filter(x => x).sort()

  const getFilterBox = () =>
    <div key='row-checkboxes' className='row' style={{ backgroundColor: 'rgb(250 250 250)', verticalAlign: 'top', margin: '1em' }}>
      {filterFields.map((field, i) =>
        <CheckboxGroup
          key={field}
          id={field}
          title={filterLabels[i] || field}
          onChangeFn={(vals: any) => setboxFilters({
            ...boxfilters,
            [field]: vals
          })}
          options={getFilterOptions(field)}
          unchecked={disabledOptions[field]}
        />
      )}

      {searchbox &&
        <div className='checkboxgroup-wrapper'>
          <span style={{ fontSize: '0.8em', fontWeight: 'bold' }}>{searchbox.label}</span>
          <Input
            placeholder='Type to filter the results...'
            onChangeFn={(e: { target: { value: any; }; }) => searchLocal(e.target.value)}
          />
        </div>}
    </div>

  return (
    <div>
      {data && filterFields && getFilterBox()}
    </div>
  )
}
