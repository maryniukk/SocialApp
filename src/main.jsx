import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import state, { addPost } from './redux/state.js'

addPost('Hei, Hei!')
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App appState={state} />
	</React.StrictMode>
)
