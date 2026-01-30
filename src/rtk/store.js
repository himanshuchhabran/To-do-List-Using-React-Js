import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './TodoSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem('rtk_todos', JSON.stringify(state.todos))
  } catch (e) {
    console.error('Failed to save state:', e)
  }
})

export default store;