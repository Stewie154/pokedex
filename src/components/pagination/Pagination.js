import React from 'react'

const Pagination = () => {
  return (
	<div className="h-1/6 flex justify-around items-center">
		<button className="bg-secondary text-lg px-7 py-2 border rounded-lg">Prev</button>
		<button className="bg-secondary text-lg px-7 py-2 border rounded-lg">Next</button>
	</div>
  )
}

export default Pagination