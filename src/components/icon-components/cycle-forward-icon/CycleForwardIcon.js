import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSinglePokemon } from '../../../redux/slices/pokemonSlice'
import { useNavigate } from "react-router-dom";

const CycleForwardIcon = () => {
	const theme = useSelector(state => state.pokemon.theme)
	const pokemon_list = useSelector(state => state.pokemon.pokemon_list)
	const selected_pokemon = useSelector(state => state.pokemon.selected_pokemon)
	const dispatch = useDispatch()
	const navigate = useNavigate();

	const getNextPokemon = () => {
		let current_list_item = pokemon_list.find(pokemon => pokemon.name === selected_pokemon.name)
		let current_list_item_index = pokemon_list.indexOf(current_list_item)
		let next_pokemon = pokemon_list[current_list_item_index + 1]
		return next_pokemon
	}

	const handleClick = async () => {
		let next_pokemon = getNextPokemon()
		if (next_pokemon) {
			await dispatch(fetchSinglePokemon(next_pokemon.url))
			navigate(`/${next_pokemon.name}`)
		}
	}

	return (
		<img
			src={`/images/icons/arrow-${theme}-mode.svg`}
			alt="filter icon"
			className={`w-10 ml-5 rotate-180 ${!getNextPokemon() ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:opacity-50 transition-all duration-300'}`}
			onClick={() => handleClick()}
		/>
	)
}

export default CycleForwardIcon