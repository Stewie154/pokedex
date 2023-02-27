import React, { useEffect } from 'react'
import './PokemonScreen.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import BackIcon from '../../components/icon-components/back-icon/BackIcon'
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner'
import { Fade } from 'react-reveal'
import { Zoom } from 'react-reveal'

const PokemonScreen = () => {
	const navigate = useNavigate()
	const selected_pokemon = useSelector(store => store.pokemon.selected_pokemon)
	const is_loading = useSelector(state => state.pokemon.is_loading)
	const theme = useSelector(state => state.pokemon.theme)
	const error = useSelector(state => state.pokemon.error)

	useEffect(() => {
		if (error !== null) {
			navigate("/error")
		}
	}, [error])

	if (selected_pokemon !== null) {
		const { name, height, weight, types, stats } = selected_pokemon
		const image = selected_pokemon.sprites.other.dream_world.front_default !== null ? selected_pokemon.sprites.other.dream_world.front_default : selected_pokemon.sprites.front_default

		const renderTypes = (types) => {
			return types.map((type_item, key) => {
				return <p className="mb-1 md:mb-3 text-sm sm:text-2xl capitalize text-left" key={key}>{type_item.type.name}</p>
			})
		}

		const renderStats = (stats) => {
			return stats.map((stat, key) => {
				return (
					<p className="md:mb-3 text-sm text-lg md:text-xl capitalize text-center" key={key}>{stat.stat.name}: {stat.base_stat}</p>
				)
			})
		}

		return (
			<>
				{
					is_loading
						?
						<LoadingSpinner />
						:
						<Fade>
							<div className={`${is_loading ? 'hidden' : 'pokemon-screen relative h-[80%] flex flex-col overflow-scroll pt-10 md:pt-5'}`}>
								<section className="w-full flex flex-col-reverse md:flex-row-reverse justify-between">
									<div className="w-full md:w-6/12">
										<Zoom>
											<section
												style={{ backgroundImage: `url(${image})` }}
												className="pokemon-image w-full pb-[65%] sm:pb-[40%] md:pb-[100%] mb-3 md:mb-0 bg-center bg-contain bg-no-repeat"
											>
											</section>
										</Zoom>
										<div className="md:hidden flex flex-col items-center">
											<div className="w-full flex items-center justify-evenly">
												{renderTypes(types)}
											</div>
											<div className="w-full flex justify-evenly">
												<p className="sm:text-lg md:text-xl text-center">Height: {height * 10} cm</p>
												<p className="sm:text-lg md:text-xl text-center">Weight: {weight / 10} kg</p>
											</div>
										</div>
									</div>

									<div className="flex flex-grow md:flex-col justify-center md:justify-start">
										<BackIcon />
										<div>
											<h2 className="capitalize  underline text-2xl md:text-4xl text-left mb-2 md:mb-6">{name}</h2>
											<div className="hidden md:block flex items-center">
												{renderTypes(types)}
											</div>
											<p className="hidden md:block mb-3 text-lg md:text-xl text-left w-full">Height: {height * 10} cm</p>
											<p className="hidden md:block mb-3 text-lg md:text-xl text-left w-full">Weight: {weight / 10} kg</p>
										</div>
									</div>
								</section>
								<section className={`w-full mt-5 py-3 sm:py-5 flex-grow flex flex-col justify-evenly border-t ${theme}-mode-border-color-secondary`}>
									<h3 className="w-full capitalize text-2xl sm:text-3xl text-center mb-2 md:mb-5">Stats</h3>
									<div className={`w-full grid grid-cols-2 md:grid-cols-3 gap-3`}>
										{renderStats(stats)}
									</div>
								</section>
							</div>
						</Fade>
				}
			</>
		)
	}
}

export default PokemonScreen