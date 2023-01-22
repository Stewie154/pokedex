import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSinglePokemon } from '../../redux/slices/pokemonSlice'
import { useNavigate } from "react-router-dom";
const PokemonListItem = ({ name, url }) => {
	const [hovering, setHovering] = useState(false)

	const navigate = useNavigate();

	const dispatch = useDispatch()

	const handleHover = () => {
		setHovering(!hovering)
	}

	const handleClick = async (url, name) => {
		await dispatch(fetchSinglePokemon(url))
		navigate(`/${name}`);
	}

	return (
		<div
			className="flex justify-between items-center py-2 cursor-pointer hover:border-b light-mode-border-color-secondary"
			onMouseEnter={() => handleHover()}
			onMouseLeave={() => handleHover()}
			onClick={() => handleClick(url, name)}
		>
			<h2 className="text-xl lg:text-3xl capitalize hover:opacity-50">{name}</h2>
			<img src='/images/pokeball.png' className={`w-7 transition ease-in-out delay-150 ${hovering && 'pokeball-animation'}`} alt="pokeball" />
		</div>
	)
}

export default PokemonListItem