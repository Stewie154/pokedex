import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedPokemon } from '../../../redux/slices/pokemonSlice'
import { Link } from 'react-router-dom'

const BackIcon = () => {
	const theme = useSelector(state => state.pokemon.theme)

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(removeSelectedPokemon())
	}
	return (
		<Link to="/">
			<img
				src={`/images/icons/arrow-${theme}-mode.svg`}
				alt="filter icon"
				className="w-10 cursor-pointer hover:opacity-50 transition-all duration-300"
				onClick={() => handleClick()}
			/>
		</Link>

	)
}

export default BackIcon