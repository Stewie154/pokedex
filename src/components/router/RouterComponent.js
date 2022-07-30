import React from 'react'
import Header from '../header/Header'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from '../../screens/home-screen/HomeScreen'
import PokemonScreen from '../../screens/pokemon-screen/PokemonScreen'

const RouterComponent = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/:pokemon" element={<PokemonScreen />} />
			</Routes>
		</Router>
	)
}

export default RouterComponent
