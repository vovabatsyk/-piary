function openAboutModal() {
    let modal = document.getElementById("aboutModal");
    let btn = document.getElementById("about");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
}
about.addEventListener("click", openAboutModal());

function openHealthModal() {
    let modal = document.getElementById("healthModal");
    let btn = document.getElementById("health");
    let span = document.getElementsByClassName("close")[1];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
}
health.addEventListener("click", openHealthModal());

function openFormModal() {
    let modal = document.getElementById('formModal');
    let btn = document.getElementById("inform");
    let span = document.getElementsByClassName("closeForm")[0];
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
