import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo-hooks'
import createClient from 'services/api/client'

import Header from 'components/Header'

import SignIn from 'pages/SignIn'
import List from 'pages/List'

import 'stylesheets/vendor/sanitize.css'
import 'stylesheets/vendor/reset.css'
import 'stylesheets/global.sass'

import useUser from './useUser'

import './styles.sass'

function App() {
  const [user, isSignedIn, setUser, cleanUser] = useUser()

  return (
    <ApolloProvider client={createClient(user.accessToken)}>
      <div className="viemed__App">
        <Header
          title="Tasks"
          userName={user.name}
          onSignOut={cleanUser}
        />

        {isSignedIn ? (
          <List />
        ) : (
          <SignIn onSubmit={setUser} />
        )}
      </div>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
