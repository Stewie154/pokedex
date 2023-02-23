import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ErrorScreen = () => {
	const theme = useSelector(state => state.pokemon.theme)
	const error = useSelector(state => state.pokemon.error)
	const dispatch = useDispatch()

	const handleClick = () => {
		console.log('click handler')
	}

	return (
		<div className="w-full h-full py-5 flex flex-col items-center justify-center">
			<h1 className="text-3xl md:text-5xl pb-3">An Error Occurred</h1>
			<h3 className="text-xl md:text-3xl">Name: {error}</h3>
			<img 
				className="w-8/12"
				src="/images/pikachu-meme.png"
				alt="pikachu" 
			/>
			<button 
				className={`${theme}-mode-bg-secondary md:text-lg font-bold px-4 md:px-7 py-1 md:py-2 border rounded-lg transition-all duration-300`}
				onClick={() => handleClick()}
			>
				<img
					className='w-[40px]'
					src={`/images/icons/refresh-light-mode.svg`}
				/>
			</button>
		</div>
	)
}

export default ErrorScreen