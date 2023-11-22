import React from 'react'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './index.css'

function App() {
	return (
		<div class='mx-auto max-w-6xl'>
			<Header />
			<Navbar />
			<div>
				<Dialogs />
			</div>

			<Profile />
		</div>
	)
}

export default App
