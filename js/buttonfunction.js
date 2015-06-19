

function infos(type, ele){


	var buttonbase = ele.parentNode.parentNode.parentNode.parentNode.parentNode;
	var newbutton;
	var search = 'div[class~="'+type+'"]'

	buttonbase.style.bottom = "900px";


	setTimeout(function() {

		buttonbase.className = buttonbase.className += " hidden";


			newbutton = document.querySelectorAll(search)[0];
			newbutton.className = type+" boutons";
			
			setTimeout(function() {
				newbutton.style.bottom = 0;
			}, 50);
	}, 300);
	
}

function search (element ,genre, media) {

	var loading = document.querySelector('#down');
	var ancient = document.querySelectorAll('button[class~="focused"]')[0];

	if(ancient != undefined){
		ancient.className = ancient.className.replace('focused','');
	}
	loading.style.display = "block";
	element.className = element.className += " focused";


	setTimeout(function() {

		smoothScroll.animateScroll( null, "#results", {
		    speed: 500, // Integer. How fast to complete the scroll in milliseconds
		    easing: 'easeInOutCubic', // Easing pattern to use
		} );

		loading.style.display = "none";


	}, 1000);
	
}

