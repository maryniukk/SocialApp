import React from 'react'
import './App.css'
import Header from './components/Header'
import MyPosts from './components/MyPosts'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import './index.css'

function App() {
	return (
		<div class='mx-auto max-w-5xl'>
			<Header />
			<Navbar />
			<Profile />
			<MyPosts />
		</div>
	)
}

export default App
