import React, { useState } from 'react'

const PokemonListSelector = () => {
	const [selectedValue, setSelectedValue] = useState("1")

	
	return (
		<select value={selectedValue}>
			<option value="1">Generation 1</option>
			<option value="2">Generation 2</option>
		</select>
	)
}

export default PokemonListSelector