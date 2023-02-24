import React from 'react'
import { useSelector } from 'react-redux'
import { Fade } from 'react-reveal'
import Pagination from '../pagination/Pagination'
import CycleForwardIcon from '../icon-components/cycle-forward-icon/CycleForwardIcon'
import CycleBackIcon from '../icon-components/cycle-back-icon/CycleBackIcon'


const Footer = () => {

	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const theme = useSelector(state => state.pokemon.theme)
	const is_loading = useSelector(state => state.pokemon.is_loading)
	
	
	const renderContent = () => {
		if (selected_pokemon === null) {
			return <Pagination />
		}
		else {
			return (
				<div className={`${is_loading ? 'hidden' : 'w-full h-full flex justify-center items-center'}`}>
					<CycleBackIcon />
					<CycleForwardIcon />
				</div>
			)
		}
	}

	return (
		<Fade>
			<div className={`${is_loading ? 'hidden' : `w-full h-[10%] border-t ${theme}-mode-border-color-secondary`}`}>
				{renderContent()}
			</div>
		</Fade>
		
	)
}

export default Footer