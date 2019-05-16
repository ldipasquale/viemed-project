import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useValue from './useValue'

import './styles.sass'

function Input({ placeholder, onSubmit, className, size }) {
  const [value, handleChangeValue, handleKeyPress, hasError, handleSubmit] = useValue('', onSubmit)

  return (
    <div
      className={cx({
        viemed__Input: true,
        [`viemed__Input--size-${size}`]: true,
        'viemed__Input--error': hasError,
        [className]: className !== null,
      })}
    >
      <input
        type="text"
        className="viemed__Input__Control"
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
        onKeyPress={handleKeyPress}
        data-testid="viemed__Input__Control"
      />

      <div
        className="viemed__Input__Button"
        onClick={handleSubmit}
        data-testid="viemed__Input__Button"
      />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'standard']),
}

Input.defaultProps = {
  placeholder: null,
  className: null,
  size: 'standard',
}

export default React.memo(Input)
