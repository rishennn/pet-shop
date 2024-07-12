import React from 'react'
import { Link } from 'react-router-dom'

function PageNav() {
	return (
		<article>
			<div className="wrapper">
				<div className="pageNav">
					<h2>Shop</h2>
					<ul>
						<li><Link to="/">Home </Link> /</li>
						<li><Link to="/">Pages</Link> /</li>
						<li><a href='#!'>Shop</a></li>
					</ul>
				</div>
			</div>
		</article>
	)
}

export default PageNav