import React, { useEffect } from 'react'
import { fetchPokemonList, selectGeneration } from '../../redux/slices/pokemonSlice'
import { useDispatch, useSelector } from 'react-redux'

const PokemonListSelector = () => {
	const dispatch = useDispatch()
	const generation = useSelector(state => state.pokemon.generation)

	const handleChange = (generation) => {
		dispatch(selectGeneration(generation))
	}

	useEffect(() => {
		dispatch(fetchPokemonList(generation))
	}, [generation])
	
	return (
		<select value={generation} className={`bg-transparent text-xl cursor-pointer focus:outline-0`} onChange={(e) => {handleChange(e.target.value)}}>
			<option value="1">Generation 1</option>
			<option value="2">Generation 2</option>
		</select>
	)
}

export default PokemonListSelector