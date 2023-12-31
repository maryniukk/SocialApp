import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import { addPost } from './redux/state.js'
export let rerenderEntireTree = state => {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<App appState={state} addPost={addPost} />
		</React.StrictMode>
	)
}
