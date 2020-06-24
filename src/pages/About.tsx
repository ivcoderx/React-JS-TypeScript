import React from 'react'
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
	const history = useHistory()

	return (
		<div className="row">
    <div className="col s12 m6">
      <div className="card blue lighten-1">
        <div className="card-content white-text">
          <span className="card-title">Управление делами</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
					<button
						className="btn purple darken-1"
						onClick={ () => history.push('/') }
					>
						Посмотреть список дел
					</button>
        </div>
      </div>
    </div>
  </div>
	)
}