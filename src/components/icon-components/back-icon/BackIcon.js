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
		<Link to="/" className="w-fit">
			<div className="absolute top-2 md:top-0 left-0 md:relative flex group items-center mb-5 cursor-pointer hover:opacity-70" onClick={() => handleClick()}>
				<img
					src={`/images/icons/arrow-${theme}-mode.svg`}
					alt="filter icon"
					className="w-5 mr-3"
				/>
				<p className="group-hover:underline">Back to List</p>
			</div>
		</Link>

	)
}

export default BackIcon