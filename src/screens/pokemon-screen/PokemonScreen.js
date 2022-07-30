import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const {name, height, weight} = selected_pokemon
	console.log(selected_pokemon)
	const image = selected_pokemon.sprites.other.dream_world.front_default
  return (
	<div>
		<section className='w-full flex flex-col justify-between items-center mt-5'>
			<h2 className='capitalize underline text-4xl text-center mb-10'>{name}</h2>
			<div style={{backgroundImage: `url(${image})`}} className="w-6/12 bg-center bg-contain bg-no-repeat pb-[45%]"></div>
			<div className='w-7/12'>
				<div className="">
					<p className="text-2xl mb-5 w-6/12">Height: {height * 10} cm</p>
					<p className="text-2xl w-6/12">Weight: {weight / 10} kg</p>
				</div>
				
			</div>
		</section>
		
	</div>
  )
}

export default PokemonScreen