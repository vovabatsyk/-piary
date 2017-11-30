function openAboutModal() {
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
}
about.addEventListener("click", openAboutModal());

function openHealthModal() {
    var modal = document.getElementById("healthModal");
    var btn = document.getElementById("health");
    var span = document.getElementsByClassName("close")[1];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
}
health.addEventListener("click", openHealthModal());

function openFormModal() {
    var modal = document.getElementById('formModal');
    var btn = document.getElementById("inform");
    var span = document.getElementsByClassName("closeForm")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
health.addEventListener("click", openFormModal());
