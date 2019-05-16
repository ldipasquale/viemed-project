import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

function Header({ title, userName, onSignOut }) {
  return (
    <div className="viemed__Header">
      <div>
        <span className="viemed__Header__Title">Viemed Healthcare</span>
        {' '}
—
        {title}
      </div>

      {userName !== null && (
        <div className="viemed__Header__User">
          {userName}

          <img
            className="viemed__Header__User__SignOut"
            src="/public/sign_out.png"
            alt="Sign out"
            onClick={onSignOut}
          />
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string,
  onSignOut: PropTypes.func,
}

Header.defaultProps = {
  userName: null,
  onSignOut: null,
}

export default React.memo(Header)
