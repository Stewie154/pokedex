import React from 'react'

const LightModeIcon = () => {
	const handleClick = () => {
		console.log('hello')
	}
	return (
		<img
			src='/images/icons/sunny-outline.svg'
			alt="filter icon"
			className="w-7 cursor-pointer hover:opacity-50"
			onClick={() => handleClick()}
		/>
	)
}

export default LightModeIcon