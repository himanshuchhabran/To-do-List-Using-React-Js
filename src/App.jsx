import React from 'react'
import { TodoProvider } from './context/TodoContext'
import store from './rtk/store'
import ShowTodoList from './components/ShowTodoList'
import ShowTodoListRTK from './rtk/ShowTodoListRTK'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
      
      <Sidebar/>
  )
}

export default App