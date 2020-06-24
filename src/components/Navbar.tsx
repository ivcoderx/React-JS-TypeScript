import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
	return (
		<nav className="row">
			<div className="nav-wrapper purple darken-2 col s12">
				<a href="/" className="brand-logo">React + TypeScript</a>
				<ul className="right hide-on-med-and-down">
					<li>
						<NavLink to="/">Список задач</NavLink>
					</li>
					<li>
						<NavLink to="/about">Информация</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}
export default Navbar