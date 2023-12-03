import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/ProfileInfo/Profile'
import './index.css'

function App(props) {
	return (
		<BrowserRouter>
			<div className='mx-auto max-w-6xl'>
				<Header />
				<div className='flex'>
					<Navbar />
					<Routes>
						<Route
							path='/dialogs'
							element={
								<Dialogs
									dialogsData={props.dialogsData}
									messages={props.messages}
								/>
							}
						/>
						<Route path='/profile' element={<Profile posts={props.posts} />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}
export default App
