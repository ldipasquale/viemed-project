/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Input from '.'

afterEach(cleanup)

const controlTestId = 'viemed__Input__Control'
const buttonTestId = 'viemed__Input__Button'

const onSubmit = jest.fn()
const placeholder = 'Enter text'
const newValue = 'New value'

const requiredProps = {
  placeholder,
  onSubmit,
}

describe('Input', () => {
  it('should render placeholder', () => {
    const { getByTestId } = render(<Input {...requiredProps} />)

    expect(getByTestId(controlTestId).placeholder).toEqual(placeholder)
  })

  it('should update control value', () => {
    const { getByTestId } = render(<Input {...requiredProps} />)

    const inputControl = getByTestId(controlTestId)
    fireEvent.change(inputControl, { target: { value: newValue } })

    expect(inputControl.value).toEqual(newValue)
  })

  it('should prevent submit when the input is empty', () => {
    const { getByTestId } = render(<Input {...requiredProps} />)

    const buttonControl = getByTestId(buttonTestId)
    fireEvent.click(buttonControl)

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('should submit when the input is not empty', () => {
    const { getByTestId } = render(<Input {...requiredProps} />)

    const inputControl = getByTestId(controlTestId)
    const buttonControl = getByTestId(buttonTestId)

    fireEvent.change(inputControl, { target: { value: newValue } })
    fireEvent.click(buttonControl)

    expect(onSubmit).toHaveBeenCalledWith(newValue)
  })

  it('should submit when enter is pressed', () => {
    const { getByTestId } = render(<Input {...requiredProps} />)

    const inputControl = getByTestId(controlTestId)

    fireEvent.change(inputControl, { target: { value: newValue } })
    fireEvent.keyPress(inputControl, { key: 'Enter', code: 13, charCode: 13 })

    expect(onSubmit).toHaveBeenCalledWith(newValue)
  })

  it('should clean control after submit', () => {
    const { getByTestId } = render(<Input {...requiredProps} />)

    const inputControl = getByTestId(controlTestId)
    const buttonControl = getByTestId(buttonTestId)

    fireEvent.change(inputControl, { target: { value: newValue } })
    fireEvent.click(buttonControl)

    expect(inputControl.value).toBe('')
  })
})
