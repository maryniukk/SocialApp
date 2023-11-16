import React from 'react'
import './App.css'
import Header from './components/Header'
import './index.css'
function App() {
	return (
		<div class='mx-auto max-w-5xl'>
			<Header />
			<div class='flex'>
				<nav class='text-2xl pt-5 	'>
					<div class=''>
						<div>Profile</div>
						<div>Messages</div>
						<div>News</div>
						<div>Music</div>
						<div class='pt-2'>Settings</div>
					</div>
				</nav>
				<div class='flex pl-40 pt-5'>
					<img
						class='rounded-md'
						src='https://i.pinimg.com/originals/6c/73/75/6c737506872effa6caac3d6a20ba2b53.jpg'
						width={500}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
