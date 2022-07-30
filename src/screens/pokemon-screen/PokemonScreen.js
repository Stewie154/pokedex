import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const { name, height, weight } = selected_pokemon
	console.log(selected_pokemon)
	const image = selected_pokemon.sprites.other.dream_world.front_default
	return (
		<div>
			<section className='w-full flex flex-col justify-between items-center mt-5'>
				<h2 className='capitalize underline text-4xl text-center mb-10'>{name}</h2>
				<div
					style={{ backgroundImage: `url(${image})` }}
					className="w-full md:w-6/12 pb-[75%] sm:pb-[45%] bg-center bg-contain bg-no-repeat"
				>
				</div>
				<div className='w-full mt-10 flex items-center justify-center'>
					<p className="text-2xl text-center w-6/12">Height: {height * 10} cm</p>
					<p className="text-2xl text-center w-6/12">Weight: {weight / 10} kg</p>
				</div>
			</section>

		</div>
	)
}

export default PokemonScreen