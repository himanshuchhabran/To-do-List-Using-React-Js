import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TodoContext } from '../context/TodoContext'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const ShowTodoList = () => {
  const { todos, addTodo, toggleTodo, removeTodo, editTodo } = useContext(TodoContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: { task: '' },
    mode: 'onChange'
  })

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const [editError, setEditError] = useState('')

  
  const validateTask = (text) => {
  const trimmed = text.trim()

  if (!trimmed) return 'Task cannot be empty'
  if (trimmed.length > 200) return 'Task must be 200 characters or less'

 
  const firstCharPattern = /^[a-zA-Z0-9]/
  if (!firstCharPattern.test(trimmed)) {
    return 'Task cannot start with special characters'
  }

  return true
}


  
  const submit = (data) => {
    addTodo(data.task.trim())
    reset()
  }


  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
    setEditError('')
  }

  
  const saveEdit = (id) => {
    const result = validateTask(editText)
    if (result !== true) {
      setEditError(result)
      return
    }
    editTodo(id, editText.trim())
    setEditId(null)
    setEditText('')
    setEditError('')
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditText('')
    setEditError('')
  }

  return (
    <>
    
    <div className="min-h-screen bg-black  flex items-start justify-center sm:py-10 p-4">
      
      <div className="w-full max-w-2xl">

        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 text-center">
            To-Do List
          </h1>
        </header>

        
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2 mb-4 md:p-6">
          <div className="flex gap-2">
            <input
              {...register('task', {
                required: 'Please enter a task',
                maxLength: { value: 200, message: 'Max 200 characters allowed' },
                validate: validateTask
              })}
              className="flex-1 px-4 py-2 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Add a new task (max 200 chars)"
            />
            <button className="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-indigo-700">
              Add
            </button>
          </div>

          {errors.task && (
            <p className="text-red-500 text-sm">{errors.task.message}</p>
          )}
        </form>

        
        <section className="bg-white shadow rounded-md divide-y divide-gray-100 overflow-hidden">

          {todos?.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              No tasks yet. Add your first task.
            </div>
          )}

          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center justify-between p-4 sm:p-5 gap-3">

              {editId === todo.id ? (
                <div className="flex-1 flex flex-col gap-2">
                  <input
                    autoFocus
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    maxLength={200}
                    className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                  />

                  {editError && (
                    <p className="text-sm text-red-500">{editError}</p>
                  )}

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => saveEdit(todo.id)}
                      className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Save
                    </button>

                    <button
                      type="button"
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
                      onChange={() => toggleTodo(todo.id)}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />

                    <div className="flex-1">
                      <div
                        className={`text-sm sm:text-base ${
                          todo.completed
                            ? 'line-through text-gray-400'
                            : 'text-gray-800'
                        }`}
                      >
                        {todo.text}
                      </div>

                      <div className="text-xs text-gray-400">
                        {new Date(todo.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => startEdit(todo)}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => removeTodo(todo.id)}
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
      </div>
    </div>
    </>
    
  )
}

export default ShowTodoList
