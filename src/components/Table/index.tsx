import { useState, useEffect } from 'react'
import soa from 'sort-objects-array'
import { Tag } from '../Tag/index'

import 'epfl-elements/dist/css/elements.min.css'
import './index.css'

type CallbackProps = {
  column: string;
  order: string;
  data: Array<any>;
}

type Callback = ({column, order, data}: CallbackProps) => any;

type TableProps = {
  data?: Array<any>;
  columns?: Array<any>;
  columnsLabels?: Array<any>;
  tagColumns?: any;
  hyperLinks?: Array<any>;
  title?: string;
  showRowTotals?: boolean;
  columnsWithRawHtml?: Array<any>;
  height?: number | string;
  width?: number | string;
  orderCallbackFn?: Callback;
}

export function Table ({ data, title, columns, columnsLabels, hyperLinks, tagColumns, showRowTotals, columnsWithRawHtml, width, height, orderCallbackFn }: TableProps) {
  const [cols, setCols] = useState<Array<string>>()
  const [rows, setRows] = useState<Array<string>>()
  const [asc, setAsc] = useState(false)

  function orderByColumn (col: string) {
    setRows(undefined)
    const direction = asc ? undefined : 'desc'
    const sortedData = soa(data, col, direction)
    setRows(sortedData)
    setAsc(!asc)
    if (orderCallbackFn) {
      orderCallbackFn({column: col, order: asc ? 'ascend' : 'descend', data: rows})
    }
  }

  function getColumns () {
    if (columns) {
      return columns
    }
    if (data && data.length > 0) {
      return Object.keys((data)[0])
    }
  }

  useEffect(() => {
    setRows([])
    setCols(getColumns())
    setRows(data)
    setAsc(true)
  }, [data]) // eslint-disable-line

  const getColumnLabel = (col: string, i: number) =>
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
    const filtered = tagColumns.columns.filter((x: any) => x === col)
    if (filtered.length > 0) {
      const tags = (row[filtered[0]] || '').split(tagColumns.separator)
      return <div>
        {tags.map((tag: string | undefined, i: number) => <Tag id={i} key={i} label={tag} />)}
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
    if (columnsWithRawHtml && columnsWithRawHtml.includes(col)) {
      return <span dangerouslySetInnerHTML={{ __html: row[col]}}></span>
    }
    return row[col]
  }

  const getHeader = () =>
    <thead>
      <tr>
        {(cols || []).map((col: string, i: any) =>
          <th key={`col-${i}`} onClick={() => orderByColumn(col)}>
            <div className='aligner'>
              <div>
                <span className='tablesaw-sortable-arrow' />
              </div>
              <div>
                <button className='tablesaw-sortable-btn'>{getColumnLabel(col, i)}
              </button>
            </div>
            </div>
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

    const getTable = () => <div>
      {title && <><hr /><h4>{title}</h4><hr /></>}
      {rows && showRowTotals && <h5>Total Records: {rows.length}</h5>}
      <table className='table table-sortable' style={{ width, height }}>
        {cols && getHeader()}
        {cols && rows && getRows()}
      </table>
  </div>

  return (
    <>
      {rows && cols && getTable()}
    </>
  )
}
