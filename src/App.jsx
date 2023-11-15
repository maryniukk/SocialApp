import React from 'react'
import './App.css'
import Header from './components/Header'
import './index.css'
function App() {
	return (
		<div class='mx-auto max-w-5xl'>
			<Header />
			<div class='flex'>
				<nav class='text-2xl pt-5'>
					<div>Profile</div>
					<div>Messages</div>
					<div>News</div>
					<div>Music</div>
					<div class='pt-2'>Settings</div>
				</nav>
				<div class='flex'>Main content</div>
			</div>
		</div>
	)
}

export default App
