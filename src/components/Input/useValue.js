import { useState } from 'react'

export default function useValue(initialValue, onSubmit) {
  const [value, setValue] = useState(initialValue)
  const [hasError, setError] = useState(false)

  function handleChangeValue({ currentTarget }) {
    const newValue = currentTarget.value

    setValue(newValue)
    setError(newValue === initialValue)
  }

  function handleSubmit() {
    if (hasError) {
      return false
    }

    if (value === initialValue) {
      return setError(true)
    }

    setValue(initialValue)
    return onSubmit(value)
  }

  return [value, handleChangeValue, hasError, handleSubmit]
}
