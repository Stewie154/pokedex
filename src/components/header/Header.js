import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeIcon from '../icon-components/dark-mode-icon/DarkModeIcon'

const Header = () => {

	return (
		<div className="w-full h-[10%] flex flex-row-reverse justify-between items-center border-b dark-mode-border-color-secondary">
			<h1 className="text-2xl lg:text-4xl text-center">Pokedex</h1>
			<DarkModeIcon />
		</div>
	)
}

export default Header
