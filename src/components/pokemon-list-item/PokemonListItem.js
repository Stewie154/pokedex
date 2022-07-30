import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSinglePokemon } from '../../redux/slices/pokemonSlice'
import { Link } from 'react-router-dom'
const PokemonListItem = ({ name, url }) => {
	const [hovering, setHovering] = useState(false)

	const dispatch = useDispatch()

	const handleHover = () => {
		setHovering(!hovering)
	}

	const handleClick = (url) => {
		dispatch(fetchSinglePokemon(url))
	}

	return (
		<Link to={`/${name}`}>
			<div
				className="flex justify-between items-center py-3 cursor-pointer hover:border-b border-color-secondary"
				onMouseEnter={() => handleHover()}
				onMouseLeave={() => handleHover()}
				onClick={() => handleClick(url)}
			>
				<h2 className="text-3xl hover:opacity-50">{name}</h2>
				<img src='/images/pokeball.png' className={`w-10 ${hovering && 'animate-spin'}`} alt="pokeball" />
			</div>
		</Link>

	)
}

export default PokemonListItem