import React from 'react'
import { useSelector } from 'react-redux'

const PokemonScreen = () => {
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const { name, height, weight, types } = selected_pokemon
	console.log(selected_pokemon)
	const image = selected_pokemon.sprites.other.dream_world.front_default

	const renderTypes = (types) => {
		return types.map((type_item, key) => {
			console.log(type_item)
			return <p className="mb-3 text-2xl uppercase text-center w-full w-6/12" key={key}>{type_item.type.name}</p>
		})
	}

	return (
		<div className="h-5/6 overflow-scroll py-5">
			<section className='w-full flex flex-col justify-between items-center mt-5'>
				<h2 className='capitalize underline text-4xl text-center mb-10'>{name}</h2>
				<div
					style={{ backgroundImage: `url(${image})` }}
					className="w-full md:w-6/12 pb-[75%] sm:pb-[45%] bg-center bg-contain bg-no-repeat"
				>
				</div>
				<div className='w-full mt-10 flex flex-wrap items-center justify-center'>
					<div className="w-full flex flex-wrap justify-center items-center">
						{renderTypes(types)}
					</div>
					<p className="mb-3 text-2xl text-center w-full sm:w-6/12">Height: {height * 10} cm</p>
					<p className="mb-3 text-2xl text-center w-full sm:w-6/12">Weight: {weight / 10} kg</p>
				</div>
			</section>

		</div>
	)
}

export default PokemonScreen