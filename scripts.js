// let body = document.getElementById("body")
let freshJSONObjects = []
let initialFetchArray = []
let firstGenObjectsArray = []
//will fetch the api information

//q4e reference 'how are they different' at bottom of page
//q4e struggling on getting it to recursively call in order to get next url, currently does once
let fetchPokedexAPI = async (url) => {
	if (freshJSONObjects.length > 1) {
		return null
	}
	let res = await fetch(url)
	let data = await res.json()
	freshJSONObjects.push(data)
	let nextURL = freshJSONObjects[0].next
	fetchPokedexAPI(nextURL)
	console.log(freshJSONObjects)
}

// let JSONthis = (res) => {}

fetchPokedexAPI("https://pokeapi.co/api/v2/pokemon")
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
