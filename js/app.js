(function(){
	const searchForm = document.querySelector('#search-form');
	const searchInput = document.querySelector('#search');
	const submitBtn = document.querySelector('#submit-btn');

	const resultContainer = document.querySelector('#search-results');

	
	searchForm.addEventListener('submit', function(evt){
		evt.preventDefault();
		resultContainer.innerHTML = '';
		let searchText = searchInput.value;
		

		// Add Image function for add the image to results container
		function addImage(){
			let htmlContent = '';
			data = JSON.parse(this.responseText);
			console.log(data.results);

			if(data && data.results && data.results[1]){
				const firstImage = data.results[1];
				htmlContent = `<figure>
				<img src="${firstImage.urls.regular}" alt=${searchText}>
				<figcaption>${searchText} by ${firstImage.user.name} </figcaption>
				</figure>
				`
			}else{
				htmlContent = `<div class="error-no-image">No Image available</div>`
			}
			resultContainer.insertAdjacentHTML('afterbegin', htmlContent);
		}
	});


})();