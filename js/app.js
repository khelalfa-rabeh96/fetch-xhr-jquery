(function(){
	const searchForm = document.querySelector('#search-form');
	const searchInput = document.querySelector('#search');
	const submitBtn = document.querySelector('#submit-btn');

	const resultContainer = document.querySelector('#search-results');

	
	searchForm.addEventListener('submit', function(evt){
		evt.preventDefault();
		resultContainer.innerHTML = '';
		let searchText = searchInput.value;
		
		
	});

})();