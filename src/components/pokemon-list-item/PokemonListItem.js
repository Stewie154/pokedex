import React from 'react'

const PokemonListItem = ({name, url}) => {
	return (
		<div className="flex justify-between items-center py-3 cursor-pointer hover:border-b border-color-secondary">
			<h2 className="text-3xl hover:opacity-50">{name}</h2>
			<img src='/images/pokeball.png' className="w-10" alt="pokeball"/>
		</div>
	)
}

export default PokemonListItem