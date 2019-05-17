/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Tasks from '.'

afterEach(cleanup)

const emptyMessageTestId = 'viemed__Tasks__EmptyMessage'
const itemTestId = 'viemed__Tasks__Item'
const addItemControlTestId = 'viemed__Input__Control'
const removeButtonAlt = 'Remove item'

const items = [{
  id: '1',
  name: 'First item',
}, {
  id: '2',
  name: 'Another item',
  isDone: true,
}]

const onCreateItem = jest.fn()
const onRemoveItem = jest.fn()
const onUpdateItem = jest.fn()

const requiredProps = {
  onCreateItem,
  onRemoveItem,
  onUpdateItem,
}

const defaultProps = {
  ...requiredProps,
  items,
}

describe('Tasks', () => {
  it('should render empty message if items are not passed', () => {
    const { getByTestId } = render(<Tasks {...requiredProps} />)

    expect(getByTestId(emptyMessageTestId)).toBeDefined()
  })

  it('should render two items', () => {
    const { getAllByTestId } = render(<Tasks {...defaultProps} />)

    expect(getAllByTestId(itemTestId)).toHaveLength(items.length)
  })

  it('should call onCreateItem when a item is being created', () => {
    const newItem = 'New item'

    const { getByTestId } = render(<Tasks {...requiredProps} />)

    const addItemControl = getByTestId(addItemControlTestId)
    fireEvent.change(addItemControl, { target: { value: newItem } })
    fireEvent.keyPress(addItemControl, { key: 'Enter', code: 13, charCode: 13 })

    expect(onCreateItem).toHaveBeenCalledWith(newItem)
  })

  it('should call onRemoveItem when a item is removed', () => {
    const { getAllByAltText } = render(<Tasks {...defaultProps} />)

    const [removeButton] = getAllByAltText(removeButtonAlt)
    fireEvent.click(removeButton)

    expect(onRemoveItem).toHaveBeenCalledWith(items[0].id)
  })

  it('should call onUpdateItem when a item is updated', () => {
    const { getAllByTestId } = render(<Tasks {...defaultProps} />)

    const [firstItem] = getAllByTestId(itemTestId)
    fireEvent.click(firstItem)

    expect(onUpdateItem).toHaveBeenCalledWith(items[0].id, !items[0].isDone)
  })
})
