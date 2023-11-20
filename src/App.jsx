import React from 'react'
import './App.css'
import MyPosts from './MyPosts'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Post from './components/Profile/Post'
import Profile from './components/Profile/Profile'
import './index.css'

function App() {
	return (
		<div class='mx-auto max-w-5xl'>
			<Header />
			<Navbar />
			<Profile />
			<Post />
			<MyPosts />
		</div>
	)
}

export default App
