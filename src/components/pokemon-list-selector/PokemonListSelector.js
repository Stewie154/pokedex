import React, { useState } from 'react'

const PokemonListSelector = () => {
	const [selectedValue, setSelectedValue] = useState("1")

	
	return (
		<select value={selectedValue} className={`bg-transparent text-xl cursor-pointer focus:outline-0`}>
			<option value="1">Generation 1</option>
			<option value="2">Generation 2</option>
		</select>
	)
}

export default PokemonListSelector