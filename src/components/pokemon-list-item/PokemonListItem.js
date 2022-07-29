import React from 'react'

const PokemonListItem = ({name, url}) => {
	return (
		<div className="flex justify-between items-center">
			<h2 className="text-3xl">{name}</h2>
			<img src='/images/pokeball.png'/>
		</div>
	)
}

export default PokemonListItem