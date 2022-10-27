let body = document.getElementById("body")
let freshJSONObjects = []
let initialFetchArray = []
let firstGenObjectsArray = []
let namesArray = []
let numberWords = [
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Eleven",
	"Twelve",
	"Thirteen",
	"Fourteen",
	"Fifteen",
	"Sixteen",
	"Seventeen",
	"Eighteen",
	"Nineteen",
	"Twenty",
]
let singleAccordianString = `<div class="accordion-item" id="accordian${numberWords}[pokemonName]">
<h2 class="accordion-header" id="heading${numberWords}[pokemonName]">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${numberWords}" aria-expanded="false" aria-controls="collapse${numberWords}[pokemonName]">
    ${namesArray}[pokemonName]
    </button>
</h2>
<div id="collapse${numberWords}[pokemonName]" class="accordion-collapse collapse" aria-labelledby="heading${numberWords}[pokemonName]" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>`
//will fetch the api information

//q4e reference 'how are they different' at bottom of page
//q4e struggling on getting it to recursively call in order to get next url, currently does once
let fetchPokedexAPI = async (url) => {
	if (freshJSONObjects.length > 1) {
		return null
	}
	let res = await fetch(url)
	let data = await res.json()
	for (let i = 0; i < data.results.length; i++) {
		namesArray.push(data.results[i].name)
	}
	// singleAccordianHTMLGenerator()
}

let singleAccordianHTMLGenerator = () => {
	for (pokemonName of namesArray) {
		body = body + singleAccordianString
	}
}

fetchPokedexAPI("https://pokeapi.co/api/v2/pokemon")
singleAccordianHTMLGenerator()

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
