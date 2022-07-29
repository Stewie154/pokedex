import React from 'react'
import './LoadingSpinner.scss'

const LoadingSpinner = () => {
  return (
	<div className="spinner-container absolute top-0 right-0">
		<div className="loading-spinner">
		</div>
	</div>
  )
}

export default LoadingSpinner