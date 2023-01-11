import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	pokemon_list: [],
	is_loading: true,
	selected_pokemon: null,
	error: '',
	next_url: null,
	prev_url: null
}

export const fetchPokemonList = createAsyncThunk(
	'pokemon/fetchPokemonList',
	async () => {
		try {
			const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
			let results = response.data.results
			let pokemon_data = []
			results.forEach(pokemon => {
				axios.get(pokemon.url).then(res => {
					pokemon_data.push(res.data)
				}).catch(err => console.log(err))
			});
			console.log(pokemon_data)

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
		}
	},
	extraReducers: {
		[fetchPokemonList.pending]: (state) => {
			state.is_loading = true
		},
		[fetchPokemonList.fulfilled]: (state, action) => {
			state.is_loading = false
			state.pokemon_list = action.payload.results
			state.next_url = action.payload.next
			state.prev_url = action.payload.previous
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
			let index = state.pokemon_list.findIndex(pokemon => pokemon.name === action.payload.name)
			state.pokemon_list[index] = action.payload
			state.selected_pokemon = action.payload
			console.log(state.pokemon_list)
		},
		[fetchSinglePokemon.rejected]: (state) => {
			state.is_loading = false
		}
	}
})

export const { selectPokemon, removeSelectedPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer

