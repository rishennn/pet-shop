import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Shop from './pages/Shop'
import Register from './pages/Auth'
import Users from './pages/Users'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/shop' element={<Shop />}/>
				<Route path='/auth' element={<Register />}/>
				<Route path='/users' element={<Users />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App