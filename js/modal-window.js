function aboutModal() {	
	// Get the modal
	var modal = document.getElementById("aboutModal");

	// Get the button that opens the modal
	var btn = document.getElementById("about");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}
about.addEventListener("click", aboutModal());

function healthModal() {	
	// Get the modal
	var modal = document.getElementById("healthModal");

	// Get the button that opens the modal
	var btn = document.getElementById("health");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[1];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}
health.addEventListener("click", healthModal());