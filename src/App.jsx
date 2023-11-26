import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/ProfileInfo/Profile'
import './index.css'

function App() {
	return (
		<BrowserRouter>
			<div className='mx-auto max-w-6xl'>
				<Header />

				<div className='flex'>
					<Navbar />
					<Routes>
						<Route path='/profile/*' element={<Profile />} />
						<Route path='/dialogs/*' element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}
export default App
