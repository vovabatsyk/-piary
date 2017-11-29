// Get the modal
var modal = document.getElementById('formModal');

// Get the button that opens the modal
var btn = document.getElementById("inform");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeForm")[0];

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

$(function() {
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/vovabatsyk@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEemail: $('#client-email').val(),
                clientMessage: $('#client-message').val()
            },
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('<h2>Thank you!<h2>');
        }).fail(function() {
            $('#message-box').html('Sorry, error occurred!');
        });
    });
    
    function blink() {
        $('#message-box').fadeOut('fast').fadeIn('fast')
        setTimeout(blink, 100);
    }
    blink();
    
});
