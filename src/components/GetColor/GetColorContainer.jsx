import React, { useState } from 'react'
import GetColorComponent from './GetColorComponent'

const GetColorContainer = () => {
  const colors = ['Red', 'Green', 'Blue', 'Gray', 'Black']
  const [colorNum, setColorNum] = useState(0)
  const [selectedColor, setSelectedColor] = useState('')
  const [nextColor, setNextColor] = useState('')
  const [prevColor, setPrevColor] = useState('')

  const getColor = (num) => {
    setSelectedColor(colors[num - 1])
  }

  const getNextColor = () => {
    setNextColor(colors[colorNum])
  }

  const getPrevColor = () => {
    setPrevColor(colors[colorNum - 2])
  }

  const reset = () => {
    setColorNum(0)
    setSelectedColor('')
    setNextColor('')
    setPrevColor('')
  }

  const colorManager = (num) => {
    getColor(num)
  }

  const createColorManager = (num) => {
    colorManager(num)
  }

  const handleSubmit = (num) => {
    setColorNum(num)
    createColorManager(colorNum)
  }

  return (
    <div className='get-color-container'>
      <h1>Task 1</h1>
      <h2>
        Create an array of colors (as strings). Create a createColorManager
        function that produces colorManager. colorManager should only have
        methods (and no properties):
      </h2>
      <p>get - return the currently selected color </p>
      <p>next - switch to the next color </p>
      <p>prev - switch to the previous color </p>
      <p>reset - switch to original color </p>
      <h2>
        The default color can be passed to the createColorManager function. Each
        colorManager should have its own independent color.{' '}
      </h2>
      <GetColorComponent handleSubmit={handleSubmit} colors={colors} />
      <div>
        <h2>Color Chosen: {selectedColor}</h2>
      </div>
      <div>
        <button onClick={() => getNextColor()}>Next Color</button>
      </div>
      <div>
        <h2>Next Color: {nextColor}</h2>
      </div>
      <div>
        <button onClick={() => getPrevColor()}>Prev Color</button>
      </div>
      <div>
        <h2>Prev Color: {prevColor}</h2>
      </div>
      <div>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  )
}

export default GetColorContainer
