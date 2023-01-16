import React from 'react'
import { useSelector } from 'react-redux'

import FilterIcon from '../icon-components/filter-icon/FilterIcon'
import BackIcon from '../icon-components/back-icon/BackIcon'

const Header = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const renderIcon = (selected_pokemon) => {
		return selected_pokemon === null ? <FilterIcon /> : <BackIcon />

	}

	return (
		<div className="w-full h-[10%] flex flex-row-reverse justify-between items-center border-b border-color-secondary">
			<h1 className="text-2xl lg:text-4xl text-center">Pokedex</h1>
			{renderIcon(selected_pokemon)}
		</div>
	)
}

export default Header
