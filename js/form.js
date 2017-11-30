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
            $('#message-box').html('<h2>Дякуєм!<h2>');
        }).fail(function() {
            $('#message-box').html('Ого, якась помилка');
        });
    });
    
    function blink() {
        $('#message-box').fadeOut('fast').fadeIn('fast')
        setTimeout(blink, 100);
    }
    blink();
    
});
