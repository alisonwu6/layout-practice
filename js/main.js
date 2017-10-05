$(document).ready(function() {


    $('#go-top').click(function(e) {

        e.preventDefault();


        var target = $(e.currentTarget).attr('href');


        var offset = $(target).offset();


        $('html, body').animate({ scrollTop: offset.top });

    });
});