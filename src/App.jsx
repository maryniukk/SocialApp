import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './index.css'

function App() {
	return (
		<HashRouter>
			<div className='mx-auto max-w-6xl'>
				<Header />
				<Navbar />
				<div className=''>
					<Dialogs />
					<Routes>
						<Route path='/' element={<Profile />} />
						<Route path='/dialogs' element={<Dialogs />} />
					</Routes>
				</div>

				<Profile />
			</div>
		</HashRouter>
	)
}

export default App
