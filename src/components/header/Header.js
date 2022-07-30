import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const renderIcon = (selected_pokemon) => {
		return selected_pokemon === null ? <img src='/images/filter-outline.svg' alt="filter icon" className="w-10 cursor-pointer hover:opacity-50" /> : <p>Back</p>

	}

	return (
		<div className="w-full h-1/6 flex flex-row-reverse justify-between items-center border-b border-color-secondary">
			<h1 className="text-4xl lg:text-6xl text-center">Pokedex</h1>
			{renderIcon(selected_pokemon)}
		</div>
	)
}

export default Header
