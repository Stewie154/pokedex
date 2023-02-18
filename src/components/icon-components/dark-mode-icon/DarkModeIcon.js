import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../redux/slices/pokemonSlice'

const DarkModeIcon = () => {
	const dispatch = useDispatch()
	
	const handleClick = () => {
		dispatch(toggleTheme())
	}
	return (
		<img
			src='/images/icons/moon-outline.svg'
			alt="filter icon"
			className="w-7 cursor-pointer md:hover:opacity-50"
			onClick={() => handleClick()}
		/>
	)
}

export default DarkModeIcon