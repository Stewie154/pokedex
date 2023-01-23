import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSinglePokemon } from '../../redux/slices/pokemonSlice'
import { useNavigate } from "react-router-dom";
const PokemonListItem = ({ name, url }) => {
	const theme = useSelector(state => state.pokemon.theme)
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
			className={`relative flex justify-between items-center py-2 cursor-pointer group transition-all duration-300`}
			onMouseEnter={() => handleHover()}
			onMouseLeave={() => handleHover()}
			onClick={() => handleClick(url, name)}
		>
			<h2 className="text-xl lg:text-3xl capitalize hover:opacity-50">{name}</h2>
			<img src={`/images/${theme}-mode-ball.png`} className={`w-7 transition ease-in-out delay-150 ${hovering && 'pokeball-animation'}`} alt="pokeball" />
			<div className={`absolute bottom-0 h-px w-0 ${theme}-mode-border-color-secondary group-hover:w-full group-hover:border-b transition-all duration-500`}></div>
		</div>
	)
}

export default PokemonListItem