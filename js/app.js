$(document).ready(function(){
    $('.tweet-compose').on('click', function(){
        $(this).toggleClass('resize');
        $('#tweet-controls').css('visibility', 'visible');
    });
        $('textarea').keydown(function(){
         var current = 140 - $('textarea').val().length;
         $('#char-count').text(current.toString());
         if (current <= 10){
             $('#char-count').css('color', 'red');
         }
         else if (current > 10){
             $('#char-count').css('color', 'black')
         }
         if (current <= 0) {
             $('button').button('disable');
         }
             
        });
})

