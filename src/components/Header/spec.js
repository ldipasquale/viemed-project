/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react'
import ReactDOM from 'react-dom'

import expect from 'expect'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Home from '.'

configure({ adapter: new Adapter() })

describe('Home Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
  })

  it('renders loading spinner at beginning', () => {
    const app = mount(<Home />)

    const spinner = app.find('.marfeel__Spinner')

    expect(spinner.length).toEqual(1)
  })

  it('renders posts and header after fetch data', async () => {
    const app = mount(<Home />)
    await app.instance().componentDidMount()
    app.update()

    const posts = app.find('.marfeel__Posts')
    const header = app.find('.marfeel__Header')

    expect(posts.length).toEqual(1)
    expect(header.length).toEqual(1)
  })
})
