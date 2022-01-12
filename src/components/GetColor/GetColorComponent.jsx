import React, { useEffect, useState } from 'react'

const GetColorComponent = ({ handleSubmit, colors }) => {
  const [num, setNum] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState(0)

  const colorItems = colors.map((color, index) => (
    <li key={index}>
      {index + 1} - {color}
    </li>
  ))

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSelectedNumber(num)
  }

  useEffect(() => {
    handleSubmit(selectedNumber)
  }, [selectedNumber, handleSubmit])

  return (
    <div className='get-color-component'>
      <div className='container'>
        <ul>{colorItems}</ul>
        <form onSubmit={handleFormSubmit} className='color-form'>
          <label>
            Choose a color by its number: <br />
            <br />
            <select defaultValue={num} onChange={(e) => setNum(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <button type='submit'>Get Color</button>
        </form>

        {/* <button onClick={createColorManager(num)}>Next Color</button>
        <button onClick={createColorManager(num)}>Prev Color</button>
        <button onClick={createColorManager(num)}>Reset</button> */}
      </div>
    </div>
  )
}

export default GetColorComponent
