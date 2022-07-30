import React from 'react'

const Header = () => {
	return (
		<div className="w-full h-1/6 flex flex-row-reverse justify-between items-center border-b border-color-secondary">
			<h1 className="text-4xl lg:text-6xl text-center">Pokedex</h1>
			<img src='/images/filter-outline.svg' alt="filter icon" className="w-10 cursor-pointer hover:opacity-50" />
		</div>
	)
}

export default Header
