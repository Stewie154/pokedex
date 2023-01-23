import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeIcon from '../icon-components/dark-mode-icon/DarkModeIcon'
import LightModeIcon from '../icon-components/light-mode-icon/LightModeIcon'

const Header = () => {

	const theme = useSelector(state => state.pokemon.theme)
	const theme_icon = theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />

	return (
		<div className={`w-full h-[10%] flex flex-row-reverse justify-between items-center border-b ${theme}-mode-border-color-secondary transition-all duration-300`}>
			<h1 className="text-2xl lg:text-4xl text-center">Pokedex</h1>
			{theme_icon}
		</div>
	)
}

export default Header
