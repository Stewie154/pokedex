import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = []

export const fetchPokemon = createAsyncThunk(
	'pokemonStatus',
	async () => {
		let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
		console.log(response.data)
	}
)