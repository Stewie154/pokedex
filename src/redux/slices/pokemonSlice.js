import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { getLastDisplayedPokemon } from '../../utilities/functions';
import axios from 'axios'

const initialState = {
	pokemon_list: [],
	first_pokemon_being_displayed: {},
	last_pokemon_being_displayed: {},
	is_loading: true,
	selected_pokemon: null,
	error: '',
	theme: 'light'
}

export const fetchPokemonList = createAsyncThunk(
	'pokemon/fetchPokemonList',
	async (generation = "1") => {
		let limit, offset
		switch (generation) {
			case "1":
				limit = 151
				offset = null
				break
			case "2":
				limit = 100
				offset = 151
				break
			default:
				limit = 151
				offset = null
				break
		}
		try {
			const url = offset === null ? `https://pokeapi.co/api/v2/pokemon/?limit=${limit}` : `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
			const response = await axios.get(url)
			return response.data
		}
		catch (error) {
			return error
		}
	}
)

export const fetchSinglePokemon = createAsyncThunk(
	'pokemon/fetchSinglePokemon',
	async (pokemon_url) => {
		try {
			const response = await axios.get(pokemon_url)
			return response.data
		} catch (error) {
			return error
		}
	}
)

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: initialState,
	reducers: {
		selectPokemon: (state, action) => {
			state.selected_pokemon = action.payload
		},
		removeSelectedPokemon: (state) => {
			state.selected_pokemon = null
		},
		displayNextList: (state) => {
			let pokemon_list = state.pokemon_list
			let last_displayed_pokemon = getLastDisplayedPokemon(pokemon_list)
			let pokemon_remaining = pokemon_list.slice(pokemon_list.indexOf(last_displayed_pokemon)).length - 1
			let updated_list
			if (pokemon_remaining >= 10) {
				 updated_list = pokemon_list.map((pokemon, index) => {
					if (index <= pokemon_list.indexOf(last_displayed_pokemon)) {
						return {...pokemon, being_displayed: false}
					}
					if (index > (pokemon_list.indexOf(last_displayed_pokemon)) && (index < pokemon_list.indexOf(last_displayed_pokemon) + 11)) {
						return {...pokemon, being_displayed: true}
					}
					else {
						return {...pokemon, being_displayed: false}
					}
				})
			}
			if (pokemon_remaining < 10) {
				updated_list = pokemon_list.map((pokemon, index) => {
					if (index <= pokemon_list.indexOf(last_displayed_pokemon)) {
						return {...pokemon, being_displayed: false}
					}
					else {
						return {...pokemon, being_displayed: true}
					} 
				})
			}
			state.pokemon_list = updated_list
			state.first_pokemon_being_displayed = updated_list.find(pokemon => pokemon.being_displayed === true)
			state.last_pokemon_being_displayed = getLastDisplayedPokemon(updated_list)
		},
		displayPreviousList: (state) => {
			let pokemon_list = state.pokemon_list
			let first_displayed_pokemon = pokemon_list.find(pokemon => pokemon.being_displayed === true)
			let previous_pokemon_remaining = pokemon_list.slice(0,pokemon_list.indexOf(first_displayed_pokemon)).length
			let updated_list
			if (previous_pokemon_remaining >= 10) {
				updated_list = pokemon_list.map((pokemon, index) => {
					if ((index < pokemon_list.indexOf(first_displayed_pokemon)) && (index > pokemon_list.indexOf(first_displayed_pokemon) - 11)) {
						return {...pokemon, being_displayed: true}
					}
					else {
						return {...pokemon, being_displayed: false}
					}
				})
			}
			state.pokemon_list = updated_list
			state.first_pokemon_being_displayed = updated_list.find(pokemon => pokemon.being_displayed === true)
			state.last_pokemon_being_displayed = getLastDisplayedPokemon(updated_list)
		},
		toggleTheme: (state) => {
			let theme = state.theme === 'light' ? 'dark' : 'light'
			state.theme = theme
		}
	},
	extraReducers: {
		[fetchPokemonList.pending]: (state) => {
			state.is_loading = true
		},
		[fetchPokemonList.fulfilled]: (state, action) => {
			let final_list = action.payload.results.map(pokemon => {
				if (action.payload.results.indexOf(pokemon) <= 9) {
					return {...pokemon, being_displayed: true}
				}
				else {
					return {...pokemon, being_displayed: false}
				}
			})
			state.is_loading = false
			state.pokemon_list = final_list
			state.first_pokemon_being_displayed = final_list.find(pokemon => pokemon.being_displayed === true)
			state.last_pokemon_being_displayed = getLastDisplayedPokemon(state.pokemon_list)
		},
		[fetchPokemonList.rejected]: (state, action) => {
			state.is_loading = false
			state.error = action.payload
		},
		[fetchSinglePokemon.pending]: (state) => {
			state.is_loading = true
		},
		[fetchSinglePokemon.fulfilled]: (state, action) => {
			state.is_loading = false
			state.selected_pokemon = action.payload
		},
		[fetchSinglePokemon.rejected]: (state) => {
			state.is_loading = false
		}
	}
})

export const { selectPokemon, removeSelectedPokemon, displayNextList, displayPreviousList, toggleTheme } = pokemonSlice.actions

export default pokemonSlice.reducer

