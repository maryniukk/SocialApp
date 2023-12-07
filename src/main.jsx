import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import state from './redux/state.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App appState={state} />
	</React.StrictMode>
)