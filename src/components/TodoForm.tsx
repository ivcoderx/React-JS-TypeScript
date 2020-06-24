import React, { useRef } from 'react'

interface Props {
	onAdd: (title: string) => void
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {

	const ref = useRef<HTMLInputElement>(null)

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			onAdd(ref.current!.value)
			ref.current!.value = ''
		}
	}

	return (
		<div className="row">
			<div className="input-field col s12">
				<input
					ref={ ref }
					onKeyPress={ keyPressHandler }
					placeholder="Название задачи"
					id="title"
					type="text"
				/>
				<label
					htmlFor="title"
					className="active"
				>
					Введите название задачи
				</label>
			</div>
	  </div>
	)
}

export default TodoForm