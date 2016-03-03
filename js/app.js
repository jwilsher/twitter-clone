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
         if (current < 135) {
             $('#tweet-submit').attr('disabled', true);
         }
         else {
            $('#tweet-submit').attr('disabled', false);
         }
         
    });


    ///submitting a new tweet....

    $("#tweet-submit").on('click', function() {
        ////stuff here.....

        var avatarURL = $('#profile-summary').find('img').attr('src');
        var userName = $('#profile-summary').find('p').text();
        var text = $("#dashboard").find("textarea.tweet-compose").val();


        var tweetStartDiv = "<div class='tweet'>";

        var contentWithoutCloseDiv = "<div class='content'><img class='avatar' src=' " +avatarURL + "' /><strong class='fullname'>"+ userName + "</strong><span class='username'></span><p class='tweet-text'>" + text + "</p>";

        var tweetActionsDiv = "<div class='tweet-actions'><ul><li><span class='icon action-reply'></span> Reply</li><li><span class='icon action-retweet'></span> Retweet</li><li><span class='icon action-favorite'></span> Favorite</li><li><span class='icon action-more'></span> More</li></ul></div>";

        var statsDiv = "<div class='stats'><div class='retweets'><p class='num-retweets'>30</p><p>RETWEETS</p></div><div class='favorites'><p class='num-favorites'>6</p><p>FAVORITES</p></div><div class='users-interact'><div><img src='img/jennyshen.jpg' /><img src='img/damenleeturks.jpg' /></div></div><div class='time'>TIME</div></div>";

        var replyDiv = "<div class='reply'><img class='avatar' src='img/alagoon.jpg' /><textarea class='tweet-compose' placeholder='Reply to @mybff'/></textarea></div>";

        var contentCloseDiv = "</div>";

        var tweetCloseDiv = "</div>";

        alert("Hello");

        $("#stream").prepend(tweetStartDiv + contentWithoutCloseDiv + tweetActionsDiv + statsDiv + replyDiv + contentCloseDiv + tweetCloseDiv);

    });


    

})


/*  Adding a tweet..... what I've tried so far....

      if (current < 140) {
            $(#tweet-submit).on('click', function() {
                ////stuff here.....

                var tweetStartDiv = "<div class='tweet'>";

                var contentWithoutCloseDiv = "<div class='content'><img class='avatar' src='' /><strong class='fullname'></strong><span class='username'></span><p class='tweet-text'></p>";

                var tweetActionsDiv = "<div class='tweet-actions'><ul><li><span class='icon action-reply'></span> Reply</li><li><span class='icon action-retweet'></span> Retweet</li><li><span class='icon action-favorite'></span> Favorite</li><li><span class='icon action-more'></span> More</li></ul></div>";

                var statsDiv = "<div class='stats'><div class='retweets'><p class='num-retweets'>30</p><p>RETWEETS</p></div><div class='favorites'><p class='num-favorites'>6</p><p>FAVORITES</p></div><div class='users-interact'><div><img src='img/jennyshen.jpg' /><img src='img/damenleeturks.jpg' /></div></div><div class='time'>TIME</div></div>";

                var replyDiv = "<div class='reply'><img class='avatar' src='img/alagoon.jpg' /><textarea class='tweet-compose' placeholder='Reply to @mybff'/></textarea></div>";

                var contentCloseDiv = "</div>";

                var tweetCloseDiv = "</div>";


                $(#stream).prepend(tweetStartDiv, contentWithoutCloseDiv, tweetActionDiv, statsDiv, replyDiv, contentCloseDiv, tweetCloseDiv);

            }
        }



In class we did......

// $(#tweet-submit').on('click, fucntion () {

    var avatarUr1 = $('#profile-summary').find('img').attr('src');
    var fullName = $('#profile.summary').find('p').text();
    var handle = "bigDeal";
    var tweetText = $('dashboard').find('textarea.tweet.compose').val();

    $('#main').prepend($(' \' 

    ...copy the div class=tweet


    }
)




*/
