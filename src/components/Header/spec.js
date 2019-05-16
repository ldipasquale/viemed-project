/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Header from '.'

afterEach(cleanup)

const userSideTestId = 'viemed__Header__User'

const title = 'Home'
const userName = 'John'

const requiredProps = {
  title,
}

describe('Header', () => {
  it('should prevent rendering user side if username is not passed', () => {
    const { queryByTestId } = render(<Header {...requiredProps} />)

    expect(queryByTestId(userSideTestId)).toBeNull()
  })

  it('should render user side if username is passed', () => {
    const { getByTestId } = render(<Header {...requiredProps} userName={userName} />)

    expect(getByTestId(userSideTestId)).toBeDefined()
  })
})
