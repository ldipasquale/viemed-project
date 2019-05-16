import React from 'react'

import Header from 'components/Header'
import Input from 'components/Input'
import Tasks from 'components/Tasks'

import './styles.sass'

function Home() {
  return (
    <div className="viemed__Home">
      <Header
        title="Tasks"
        userName="Luciano"
      />

      <div className="viemed__Home__Title">
        Hi there, what’s your name?
      </div>

      <Input
        placeholder="Type your name here..."
        onSubmit={console.log}
        className="viemed__Home__NameInput"
      />

      <Tasks
        onCreateItem={console.log}
        onUpdateItem={console.log}
        onRemoveItem={console.log}
        items={[{
          id: '111',
          name: 'Post on Dribbble',
        }, {
          id: '222',
          name: 'Buy a gift for John birthday',
        }, {
          id: '3',
          name: 'Decide how organize the meeting',
          isDone: true,
        }, {
          id: '444',
          name: 'Create wireframes',
        }]}
      />
    </div>
  )
}

export default React.memo(Home)
