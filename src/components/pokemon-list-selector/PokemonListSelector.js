import React, { useState } from 'react'

const PokemonListSelector = () => {
	const [selectedValue, setSelectedValue] = useState("1")
	return (
		<select value={selectedValue}>
			<option value="1">Generation 1</option>
			<option value="2">Generation 2</option>
			<option value="3">Generation 3</option>
			<option value="4">Generation 4</option>
		</select>
	)
}

export default PokemonListSelector