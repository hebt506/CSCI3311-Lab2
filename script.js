// TODO: load the dataset 
let attractions;

// fetch('/attractions.json')
//   .then(response => response.json())
//   .then(data => {
//     attractions = data;
// 	});

async function loadData() {

	let response = await fetch('/attractions.json');
	let data = await response.json().catch();
	// console.log(data)
	return data;
	
}
    
function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    
	var attraction_cat;

	if (!category || category === 'all') {

		attraction_cat = attractions;
		// console.log(attraction_cat)

	} else {

		attraction_cat = attractions.filter(d => d.Category === category)
		// console.log(attraction_cat)

	}

	function transform(amount) {

		filtered = amount.sort((a,b)=>b.Visitors-a.Visitors);
		filtered = filtered.slice(0,5);
		// console.log(filtered)
		return filtered;

	}

	renderBarChart(transform(attraction_cat))

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

// let top5 = filterData();
// renderBarChart(top5)

async function main(){

	attractions = await loadData();
	// console.log(attractions)
	filterData();

	let a = document.querySelector('#attraction-category');
	a.addEventListener('change', (event)=>{
    // console.log('Current event.target.value is: ', event.target.value);
   		filterData(event.target.value);
	});	

}

main()