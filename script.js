// TODO: load the dataset 
var attractions;

fetch('/attractions.json')
  .then(response => response.json())
  .then(data => {
    attractions = data;
	console.log(attractions);
	});

// console.log(attractions);
    
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
    // console.log(attractions)


}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

