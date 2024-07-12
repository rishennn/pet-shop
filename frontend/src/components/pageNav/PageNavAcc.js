import React from 'react'
import { Link } from 'react-router-dom'

function PageNav() {
	return (
		<article>
			<div className="wrapper">
				<div className="pageNav">
					<h2>Account</h2>
					<ul>
						<li><Link to="/">Home </Link> /</li>
						<li><Link to="/">Pages</Link> /</li>
						<li><a href='#!'>Account</a></li>
					</ul>
				</div>
			</div>
		</article>
	)
}

export default PageNav