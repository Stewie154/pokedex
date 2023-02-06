import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const CycleForwardIcon = () => {
	const theme = useSelector(state => state.pokemon.theme)

	const dispatch = useDispatch()

	const handleClick = () => {
		// dispatch()
		console.log('click handler')
	}
	return (
		<img
			src={`/images/icons/arrow-${theme}-mode.svg`}
			alt="filter icon"
			className="w-10 ml-5 cursor-pointer hover:opacity-50 transition-all duration-300 rotate-180"
			onClick={() => handleClick()}
		/>
	)
}

export default CycleForwardIcon