import React from 'react'
import { TodoProvider } from './context/TodoContext'
import ShowTodoList from './components/ShowTodoList'

const App = () => {
  return (
    <TodoProvider>
      <ShowTodoList />
    </TodoProvider>
  )
}

export default App