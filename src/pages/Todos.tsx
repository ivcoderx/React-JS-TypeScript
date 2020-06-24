import React, { useState, useEffect } from 'react'
import { TodoForm, TodoList } from '../components'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    console.log('saved: ', saved)
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo =>
      (todo.id === id)
        ? {...todo, completed: !todo.completed}
        : todo
      )
    )
  }

  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Вы уверены?')
    
    shoudRemove && setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    )
  }

	return (
		<>
		  <h1>Список задач</h1>
        <TodoForm onAdd = { addHandler } />
        <TodoList
          onToggle={ toggleHandler }
          onRemove={ removeHandler }
          todos={ todos }
        />
		</>
	)
}