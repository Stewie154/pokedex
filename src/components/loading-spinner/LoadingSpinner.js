import React from 'react'
import { useSelector } from 'react-redux'
import './LoadingSpinner.scss'

const LoadingSpinner = () => {
	const theme = useSelector(state => state.pokemon.theme)
	return (
		<div className="spinner-container absolute top-0 right-0">
			<div className={`loading-spinner ${theme}-mode-spinner`}>
			</div>
		</div>
	)
}

export default LoadingSpinner