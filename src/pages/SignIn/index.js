import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from 'react-apollo-hooks'

import apiConfig from 'config/api'
import { SIGN_IN } from 'services/Users'
import Input from 'components/Input'

import './styles.sass'

function SignIn({ onSubmit }) {
  const handleSignIn = useMutation(SIGN_IN)

  const handleSubmit = async (name) => {
    const { data: { generateAccessToken: accessToken }} = await handleSignIn({ variables: {
      userName: name,
      apiKey: apiConfig.apiKey,
    }})

    return onSubmit({
      name,
      accessToken,
    })
  }

  return (
    <div className="viemed__SignIn">
      <div className="viemed__SignIn__Title">
        Hi there, what’s your name?
      </div>

      <Input
        placeholder="Type your name here..."
        onSubmit={useCallback(handleSubmit)}
        className="viemed__SignIn__NameInput"
      />
    </div>
  )
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default React.memo(SignIn)
