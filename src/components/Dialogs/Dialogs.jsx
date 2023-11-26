import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	let path = '/Dialogs/' + props.id
	return (
		<div>
			<NavLink
				className='text-xl hover:text-green-500 transition-all'
				to={path}
			>
				{props.name}
			</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className='text-xl pb-1'>{props.message}</div>
}

const Dialogs = () => {
	return (
		<div className='flex  pl-20 pt-5'>
			<div>
				<DialogItem name='Nikita' id='1' />
				<DialogItem name='Taras' id='2' />
				<DialogItem name='Kirill' id='3' />
				<DialogItem name='Danya' id='4' />
			</div>
			<div>
				<div className='pl-20'>
					<Message message='Hi!' />
					<Message message='How are you?' />
					<Message message='See you soon.' />
					<Message message='How is your day going?!' />
				</div>
			</div>
		</div>
	)
}

export default Dialogs
