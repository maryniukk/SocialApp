import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'

let posts = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
	{ id: 2, message: 'It is my first post!', likesCount: 11 },
	{ id: 3, message: 'Blabla', likesCount: 50 },
	{ id: 4, message: 'Lalalala', likesCount: 5 },
]
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App posts={posts} />
	</React.StrictMode>
)
