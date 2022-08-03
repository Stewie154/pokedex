# Pokedex
A pokedex app made with react and redux-toolkit, styled with tailwind css. Pokemon data to come from poke api: https://pokeapi.co/

* Step 1:
	* Generate a react app with redux-toolkit with ` npx create-react-app my-app --template redux `
	* Install tailwind https://tailwindcss.com/docs/guides/create-react-app

* Step 2:
	* Remove boilerplate code
	* Set up folder structure in src
		* screens 
		* components
		* redux
		* sass
	* Style app component to be a main container which houses all content in the application, locate in center of screen
	* Styles background and app container
	* Create header component (to contain title and filter icon)
	* Create Home and Pokemon screens 
	* Install react router dom ` npm i react-router-dom `
	* Create routes for home / and pokemon view /pokemon
	

* Step 3: 
	* Create pokemon 'slice'
	* Install axios
	* Make api call to the pokeapi on page load and save some pokemon in the store
	* Make sure A loading spinner shows when pokemon are being retrieved 
	* Render a list of pokemon components for each pokemon in the store
	* add animation for when a pokemon list item is hovered, underline and pokeball image
	* When a pokemon is clicked, navigate to pokemon screen and display some info about it (with a picture)
	* Add enough info, make it look good & responsive
	* Add a back button to get back the list on the home screen
	* Set selected pokemon back to an empty object on back button click, navigate to home page

* Step 4:
	* Create a pagination component 
	* Save the next and prev urls in the redux store 
	* Create prev / next buttons
	* Make sure the buttons only show if a prev / next url is available (eg no prev button on first page)

* Step 5:
	* Only fetch the first 151 pokemon (gen 1)
	* Get fetchSinglePokemon action to fire for every pokemon on home screen, then console log the updated pokemon_list
	* Replace each item in pokemon_list with the result of calling the items url, leaving pokemon_list with more info for each pokemon
	* Add a being_shown property to each item, default to true
	* Create a PokemonCard component and render each pokemon with it's image and type.
	* Add grid / list item icons to toggle the view from cards to a list.
	* Clicking a card takes user to pokemonScreen
	* Create custom pagination to only show 15 pokemon per page
	* Create a form component that gives the user the option to filter pokemon by type (water, fire, grass etc)
	* Show form on filter icon click
	* Get form functional so the api url accommodates the user's form input and retrieves the correct pokemon 

* Step 6:
	* Add animations throughout app
	* add a light / dark mode toggle, create a new slice for this and conditionally render the light / dark classes throughout app
	* Add feedback to ui to let user know they can scroll the page to see more pokemon

## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
