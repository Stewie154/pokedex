import React from 'react'
import Header from '../header/Header'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from '../../screens/home-screen/HomeScreen'
import PokemonScreen from '../../screens/pokemon-screen/PokemonScreen'
import Footer from '../footer/Footer'

const RouterComponent = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/:pokemon" element={<PokemonScreen />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default RouterComponent
