import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useValue from './useValue'

import './styles.sass'

function Input({ placeholder, onSubmit }) {
  const [value, handleChangeValue, hasError, handleSubmit] = useValue('', onSubmit)

  return (
    <div
      className={cx({
        viemed__Input: true,
        'viemed__Input--error': hasError,
      })}
    >
      <input
        type="text"
        className="viemed__Input__Control"
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
      />

      {onSubmit !== null && (
        <div
          className="viemed__Input__Button"
          onClick={handleSubmit}
        />
      )}
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
}

Input.defaultProps = {
  placeholder: null,
  onSubmit: null,
}

export default React.memo(Input)
