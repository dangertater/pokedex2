// let body = document.getElementById("body")
let initialFetchArray = []
let firstGenObjectsArray = []
//will fetch the api information

//q4e reference 'how are they different' at bottom of page
let fetchPokedexAPI = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon")
	let data = await res.json()
	console.log(data)
}

// let JSONthis = (res) => {}

fetchPokedexAPI()
// then((res) => res.json()).then()

//q4e how are they different?
//----let fetchPokedexAPI = async () => {
//----const res = await fetch("https://pokeapi.co/api/v2/pokemon")
//----let data = await res.json()
//----console.log(data)
//----}
//----VS
//----let fetchPokedexAPI = async () => {
//----const res = await fetch("https://pokeapi.co/api/v2/pokemon")
//----console.log(res.json())
//----}
//----
//----
//----
//----
//----
//----
