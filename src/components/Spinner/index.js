import React from 'react'
import Loader from 'react-loader-spinner'

import './styles.sass'

export default function Spinner() {
  return (
    <div className="viemed__Spinner">
      <Loader
        type="Puff"
        color="#0054FF"
        height="72"
        width="72"
      />
    </div>
  )
}
