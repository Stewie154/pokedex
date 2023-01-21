import React from 'react'

const DarkModeIcon = () => {
	const handleClick = () => {
		console.log('hello')
	}
	return (
		<img
			src='/images/icons/moon-outline.svg'
			alt="filter icon"
			className="w-7 cursor-pointer hover:opacity-50"
			onClick={() => handleClick()}
		/>
	)
}

export default DarkModeIcon