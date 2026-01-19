import React from 'react'

const ColorChangerBtn = (props) => {
  return (
    <div >
        <button className={`bg-${props.color} text-white p-2 m-2 rounded-xl`}>{props.text}</button>
    </div>
  )
}

export default ColorChangerBtn