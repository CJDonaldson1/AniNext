import React, { useState } from 'react'
const InputForm = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSend(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a genre"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default InputForm
