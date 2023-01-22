import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../redux/slices/pokemonSlice'

const LightModeIcon = () => {
	const dispatch = useDispatch()
	
	const handleClick = () => {
		dispatch(toggleTheme())
	}

	return (
		<img
			src='/images/icons/sunny-outline.svg'
			alt="filter icon"
			className="w-7 cursor-pointer hover:opacity-50"
			onClick={() => handleClick()}
		/>
	)
}

export default LightModeIcon