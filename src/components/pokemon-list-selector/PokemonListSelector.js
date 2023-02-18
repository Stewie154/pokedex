import React, { useState, useEffect } from 'react'
import { fetchPokemonList } from '../../redux/slices/pokemonSlice'
import { useDispatch } from 'react-redux'

const PokemonListSelector = () => {
	const dispatch = useDispatch()
	const [selectedValue, setSelectedValue] = useState(1)

	const handleChange = (generation) => {
		setSelectedValue(generation)
	}

	useEffect(() => {
		dispatch(fetchPokemonList(selectedValue))
	}, [selectedValue])
	
	return (
		<select value={selectedValue} className={`bg-transparent text-xl cursor-pointer focus:outline-0`} onChange={(e) => {handleChange(e.target.value)}}>
			<option value="1">Generation 1</option>
			<option value="2">Generation 2</option>
		</select>
	)
}

export default PokemonListSelector