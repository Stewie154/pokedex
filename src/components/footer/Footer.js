import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'
import CycleForwardIcon from '../icon-components/cycle-forward-icon/CycleForwardIcon'
import CycleBackIcon from '../icon-components/cycle-back-icon/CycleBackIcon'


const Footer = () => {

	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)

	
	
	const renderContent = () => {
		if (selected_pokemon === null) {
			return <Pagination />
		}
		else {
			return (
				<div className="w-full flex justify-center items-center">
					<CycleBackIcon />
					<CycleForwardIcon />
				</div>
			)
		}
	}

	return (
		<div className="w-full h-[10%]">
			{renderContent()}
		</div>
	)
}

export default Footer