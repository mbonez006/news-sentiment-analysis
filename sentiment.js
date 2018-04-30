var sentiment = require('sentiment');

var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

var newsText = $('.story-body__inner').text();

var result = sentiment(newsText);
if(result.score > 0) {
    $('.story-body__h1').append(" - 🙂 " + result.score + " - Includes words like: " + result.positive.slice(0, 5));
}
else if(result.score == 0) {
    $('.story-body__h1').append(" - 😶");
}
else{
    $('.story-body__h1').append(" - 😡 " + result.score + " - Includes words like: " + result.negative.slice(0, 5));
}