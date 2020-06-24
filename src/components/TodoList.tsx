import React from 'react'
import { ITodo } from '../interfaces'

interface Props {
	todos: ITodo[]
	onToggle: (id: number) => void
	onRemove: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, onRemove, onToggle }) => {

	return (
		<div className="row">
			{	!!todos.length
				? (
					<ul className="col s12">
						{ todos.map(todo => {
							const classes = ['todo']
							todo.completed && classes.push('completed')
							return (
								<li
									key={ todo.id }
									className={ classes.join(' ') }
								>
									<label>
										<input
											type="checkbox"
											checked={ todo.completed }
											onChange={ onToggle.bind(null, todo.id) }
										/>
										<span>
											{ todo.title }
										</span>
										<i
											className="material-icons red-text"
											onClick={ (event: React.MouseEvent) => {
												event.preventDefault()
												onRemove(todo.id)}
											}
										>
											delete
										</i>
									</label>
								</li>
							)}
							)
						}
				</ul>
				)
				: <p className="center col s12">Пока дел нет</p>
			}
		</div>
	
	)
}

export default TodoList