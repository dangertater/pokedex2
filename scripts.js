// let body = document.getElementById("body")
let initialFetchArray = []
let firstGenObjectsArray = []
//will fetch the api information
let fetchPokedexAPI = async () => {
	setTimeout(() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
	}, 3000)
}

let consoleLogTest = async () => {
	await fetchPokedexAPI()
	console.log("consoleLogTest", "completed")
}

// fetchPokedexAPI("https://pokeapi.co/api/v2/pokemon")
consoleLogTest()
