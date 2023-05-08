import { useState, useEffect } from 'react'
import soa from 'sort-objects-array'
import { Tag } from '../Tag/index'

import '@epfl/epfl-elements-styles/dist/css/combined.css'
import './index.css'

type TableProps = {
  data?: Array<any>;
  columns?: Array<any>;
  columnsLabels?: Array<any>;
  tagColumns?: any;
  hyperLinks?: Array<any>;
  title?: string;
  showRowTotals?: boolean;
  height?: number | string;
  width?: number | string;
}

export function Table ({ data, title, columns, columnsLabels, hyperLinks, tagColumns, showRowTotals, width, height }: TableProps) {
  const [cols, setCols] = useState<Array<string>>()
  const [rows, setRows] = useState<Array<string>>()
  const [asc, setAsc] = useState(false)

  function orderByColumn (col: string) {
    setRows(undefined)
    const direction = asc ? undefined : 'desc'
    const sortedData = soa(data, col, direction)
    setRows(sortedData)
    setAsc(!asc)
  }

  useEffect(() => {
    setCols(columns || Object.keys((data || [])[0]))
    setRows(data)
    setAsc(true)
  }, []) // eslint-disable-line

  const getColumnLabel = (col: any, i: string | number) =>
    // @ts-ignore
    columnsLabels && columnsLabels[i] ? columnsLabels[i] : col

  const getHyperLinkRowValue = (col: string | number, row: { [x: string]: any }) => {
    const filtered = (hyperLinks || []).filter((x: { column: any }) => x.column === col)
    if (filtered.length > 0) {
      return <a href={row[filtered[0].link]} target={filtered[0].target} onClick={filtered[0].onClick}>
        {row[col]}
      </a>
    }
  }

  const getTagValue = (col: any, row: { [x: string]: any }) => {
    // @ts-ignore
    const filtered = tagColumns.columns.filter((x: any) => x === col)
    if (filtered.length > 0) {
      // @ts-ignore
      const tags = (row[filtered[0]] || '').split(tagColumns.separator)
      return <div>
        {/* @ts-ignore */}
        {tags.map((tag: string | undefined, i: any) => <Tag id={i} label={tag} />)}
      </div>
    }
  }

  const getRowValue = (col: string | number, row: { [x: string]: any }) => {
    if (hyperLinks) {
      const hyperlinkValue = getHyperLinkRowValue(col, row)
      if (hyperlinkValue) {
        return hyperlinkValue
      }
    }
    if(tagColumns) {
      const tagValue = getTagValue(col, row)
      if (tagValue) {
        return tagValue
      }
    }
    return row[col]
  }

  const getHeader = () =>
    <thead>
      <tr>
        {(cols || []).map((col: string, i: any) =>
          <th key={`col-${i}`} onClick={() => orderByColumn(col)}>
            <button className='tablesaw-sortable-btn'>{getColumnLabel(col, i)}<span className='tablesaw-sortable-arrow' /></button>
          </th>)}
      </tr>
    </thead>

  const getRows = () =>
    <tbody>
      {(rows || []).map((row: any, i: any) =>
        <tr key={`row-${i}`}>
          {(cols || []).map((col: any, j: any) => <td key={`cell-${i}-${j}`}>{getRowValue(col, row)}</td>)}
        </tr>)}
    </tbody>

  return (
    <div>
      {title && <><hr /><h4>{title}</h4><hr /></>}
      {rows && showRowTotals && <h5>Total Records: {rows.length}</h5>}
      <table className='table table-sortable' style={{ width, height }}>
        {cols && getHeader()}
        {cols && rows && getRows()}
      </table>
    </div>

  )
}
