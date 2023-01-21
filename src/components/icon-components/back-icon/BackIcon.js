import React from 'react'
import { useDispatch } from 'react-redux'
import { removeSelectedPokemon } from '../../../redux/slices/pokemonSlice'
import { Link } from 'react-router-dom'

const BackIcon = () => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeSelectedPokemon())
	}
	return (
		<Link to="/">
			<img
				src='/images/icons/arrow-light-mode.svg'
				alt="filter icon"
				className="w-9 cursor-pointer hover:opacity-50"
				onClick={() => handleClick()}
			/>
		</Link>

	)
}

export default BackIcon