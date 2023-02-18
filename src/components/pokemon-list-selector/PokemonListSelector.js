import React, { useEffect } from 'react'
import { fetchPokemonList, selectGeneration, removeSelectedPokemon } from '../../redux/slices/pokemonSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


const PokemonListSelector = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const generation = useSelector(state => state.pokemon.generation)
	const selected_pokemon = useSelector(state => state.pokemon.selected_pokemon)

	const handleChange = (generation) => {
		dispatch(selectGeneration(generation))
	}

	useEffect(() => {
		dispatch(fetchPokemonList(generation))
		if (selected_pokemon) {
			dispatch(removeSelectedPokemon())
			navigate("/")
		}
	}, [generation])
	
	return (
		<select value={generation} className={`bg-transparent text-xl cursor-pointer focus:outline-0`} onChange={(e) => {handleChange(e.target.value)}}>
			<option value="1">Generation 1</option>
			<option value="2">Generation 2</option>
			<option value="3">Generation 3</option>
		</select>
	)
}

export default PokemonListSelector