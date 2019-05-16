import { useState } from 'react'

export default function useValue(initialValue, onSubmit) {
  const [value, setValue] = useState(initialValue)
  const [hasError, setError] = useState(false)

  const handleChangeValue = ({ currentTarget }) => {
    const newValue = currentTarget.value

    setError(newValue === initialValue)
    setValue(newValue)
  }

  const handleSubmit = () => {
    if (hasError) {
      return false
    }

    if (value === initialValue) {
      return setError(true)
    }

    onSubmit(value)
    return setValue(initialValue)
  }

  return [value, handleChangeValue, hasError, handleSubmit]
}
