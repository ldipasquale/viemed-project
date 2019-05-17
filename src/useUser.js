import { useState } from 'react'

const USERNAME = 'username'
const ACCESS_TOKEN = 'accessToken'

export default function useUser() {
  const [user, setUser] = useState({
    name: localStorage.getItem(USERNAME),
    accessToken: localStorage.getItem(ACCESS_TOKEN),
  })

  const handleSetUser = ({ name, accessToken }) => {
    localStorage.setItem(USERNAME, name)
    localStorage.setItem(ACCESS_TOKEN, accessToken)

    return setUser({
      name,
      accessToken,
    })
  }

  const handleCleanUser = () => {
    localStorage.removeItem(USERNAME)
    localStorage.removeItem(ACCESS_TOKEN)

    return setUser({
      name: null,
      accessToken: null,
    })
  }

  const isSignedIn = user.name !== null

  return [user, isSignedIn, handleSetUser, handleCleanUser]
}
