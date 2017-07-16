"use strict";

let wrapper = document.querySelector('.wrapper'),
	search = document.getElementById('search'),
	results = document.getElementById('results');

search.addEventListener('keyup', function(e) {
	if (e.which === 13 && e.target.value) {
		// move the search box up
		getQuery(e.target.value);
	}
});

function getQuery(query) {
	let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&search=' + encodeURIComponent(query) + '&callback=?';
	$.getJSON(url, function(data) {
	  loadData(data);
	});
}

function loadData(data) {
	let titles = data[1],
		summaries = data[2],
		links = data[3];
	/*

	div hre
		h1
		summary
	*/

	for (let i = 0, len = titles.length; i < len; ++i) {
		results.innerHTML += `<a href="${links[i]}"><div class="result"><h1>${titles[i]}</h1><p>${summaries[i]}</p></div></a>`;
	}
}