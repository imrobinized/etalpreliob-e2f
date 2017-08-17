import React from 'react'
import { shallow } from 'enzyme'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from 'actions/counter'
import { CounterPage } from 'containers/CounterPage'
import Counter from 'components/Counter'

describe('CounterPage counter visibility toggle', () => {
  const page = shallow(<CounterPage />)

  it('should show counter component', () => {
    page.setState({ showCounter: true })
    expect(page.find(Counter).length).toBe(1)
  })

  it('should hide counter component', () => {
    page.setState({ showCounter: false })
    expect(page.find(Counter).length).toBe(0)
  })
})
