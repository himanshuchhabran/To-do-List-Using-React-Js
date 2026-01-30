import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo, editTodo } from './TodoSlice'

const ShowTodoListRTK = () => {
  const todos = useSelector((s) => s.todos)
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const validateInput = (input) => {
    const trimmed = input.trim()
    if (!trimmed) return 'Task cannot be empty'
    if (trimmed.length > 200) return 'Task must be 200 characters or less'
    const validPattern = /^[a-zA-Z0-9\s.,!?']+$/
    if (!validPattern.test(trimmed)) {
      return 'Special characters like #, -, @, $, %, & etc. are not allowed'
    }
    return ''
  }

  const submit = (e) => {
    e.preventDefault()
    const err = validateInput(text)
    if (err) {
      setError(err)
      return
    }
    setError('')
    dispatch(addTodo(text.trim()))
    setText('')
  }

  const startEdit = (todo) => {  
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = (id) => {  
    const err = validateInput(editText)
    if (err) {
      setError(err)
      return
    }
    setError('')
    dispatch(editTodo({ id, text: editText.trim() }))
    setEditId(null)
    setEditText('')
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditText('')
    setError('')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-start justify-center">
      <div className="w-full max-w-2xl">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">To-Do List (RTK)</h1>
          <p className="text-sm text-gray-500 text-center">Redux Toolkit + react-redux implementation</p>
        </header>

        <form onSubmit={submit} className="flex flex-col gap-2 mb-4">
          <div className="flex gap-2">
            <input
              className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Add a new task (max 200 chars)"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                setError('')
              }}
              maxLength="200"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Add</button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>

        <section className="bg-white shadow rounded-md divide-y divide-gray-100 overflow-hidden">
          {todos.length === 0 && (
            <div className="p-6 text-center text-gray-500">No tasks yet — add your first task.</div>
          )}

          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center justify-between p-4 sm:p-5 gap-3">
              {editId === todo.id ? (
                <div className="flex-1 flex flex-col gap-2">
                  <input
                    autoFocus
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    maxLength="200"
                    className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-3 py-1 text-sm bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(toggleTodo(todo.id))}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <div className="flex-1">
                      <div className={`text-sm sm:text-base ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {todo.text}
                      </div>
                      <div className="text-xs text-gray-400">{new Date(todo.createdAt).toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => startEdit(todo)}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </section>

        <footer className="mt-4 text-sm text-gray-500 text-center">{todos.length} task{todos.length !== 1 ? 's' : ''}</footer>
      </div>
    </div>
  )
}

export default ShowTodoListRTK