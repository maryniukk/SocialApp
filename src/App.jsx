import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './index.css'

function App() {
	return (
		<BrowserRouter>
			<div className='mx-auto max-w-6xl'>
				<Header />
				<Navbar />
				<div className=''>
					<Routes>
						<Route path='/Profile' element={<Profile />} />
						<Route path='/Dialogs' element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
