import React from 'react'
import ColorChangerBtn from "./components/ColorChangerBtn"

const arr = ["green","red","yellow","pink"]
const [color, setColor] = React.useState("olive")



const App = () => {
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='flex justify-center items-center h-full flex-wrap'>
        {
          arr.map((colr, index)=>(
            <div key={index} onClick={()=> setColor(colr)}>
              <ColorChangerBtn color={colr} text={`Change to ${colr}`}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App