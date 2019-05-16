import React from 'react'

import Header from 'components/Header'
import Input from 'components/Input'

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
      />
    </div>
  )
}

export default React.memo(Home)
