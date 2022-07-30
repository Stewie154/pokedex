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
				src='/images/arrow-back-outline.svg'
				alt="filter icon"
				className="w-14 cursor-pointer hover:opacity-50"
				onClick={() => handleClick()}
			/>
		</Link>

	)
}

export default BackIcon