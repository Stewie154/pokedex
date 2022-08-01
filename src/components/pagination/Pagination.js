import React from 'react'

const Pagination = () => {
  return (
	<div className="h-1/6 flex justify-around items-center">
		<button className="bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-400">Prev</button>
		<button className="bg-secondary text-lg font-bold px-7 py-2 border rounded-lg transition-all duration-400">Next</button>
	</div>
  )
}

export default Pagination