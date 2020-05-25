import React, { memo, forwardRef } from 'react'
import { Pane } from '../../layers'
import TableBody from './TableBody'
import TableVirtualBody from './TableVirtualBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'
import TextTableCell from './TextTableCell'
import TextTableHeaderCell from './TextTableHeaderCell'
import SearchTableHeaderCell from './SearchTableHeaderCell'
import EditableCell from './EditableCell'
import SelectMenuCell from './SelectMenuCell'

const Table = memo(
  forwardRef(({ children, ...props }, ref) => {
    return (
      <Pane ref={ref} {...props}>
        {children}
      </Pane>
    )
  })
)
Table.Body = TableBody
Table.VirtualBody = TableVirtualBody
Table.Head = TableHead
Table.HeaderCell = TableHeaderCell
Table.TextHeaderCell = TextTableHeaderCell
Table.SearchHeaderCell = SearchTableHeaderCell
Table.Row = TableRow
Table.Cell = TableCell
Table.TextCell = TextTableCell
Table.EditableCell = EditableCell
Table.SelectMenuCell = SelectMenuCell

Table.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes
}

export default Table
