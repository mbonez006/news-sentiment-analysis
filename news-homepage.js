var sentiment = require('sentiment');

var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

$('#latest-stories-tab-container').find('a').each(function() {
    var link = $(this).attr('href');
    if (!link.includes("http")) {
        var aLink = $(this);
        $.ajax({url: 'http://www.bbc.co.uk' + link,
            success: function(data){
                var newsText = $(data).find(".story-body__inner").text();
                var result = sentiment(newsText);
                if(result.score > 0) {
                    aLink.append(" 🙂");
                }
                else if(result.score < 0) {
                    aLink.append(" 😡");
                }
            } 
        });
    }
});