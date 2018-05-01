# news-sentiment-analysis

## Usage
run: 
```
browserify news-story-sentiment.js -o bundle-new-story.js
browserify news-titlepage-sentiment.js -o bundle-new-titlepage.js
```

Host the generated bundle*.js somewhere, lets say https://publicly-accessible-s3-location/bundle*.js

Then create bookmarklets script like below: (so create a browser bookmark and paste the code below into 'location' textbox, one bookmarlets each for news homepage and news story): 

```
javascript:(function(){
	var script = document.createElement('script');
	script.src = '//code.jquery.com/jquery-1.11.0.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);
	document.body.appendChild(document.createElement('script')).src='https://publicly-accessible-s3-location/bundle-news-titlepage.js';
})();
```

### Test (BBC) News Story Page
Go to News website, open a news story, then click your news story bookmarklet - the title of the news should be updated with a bit of sentiment about that news. 

### Test (BBC) News Titles page
Go to News homepage or any other page that has news titles on it, click on your news titles page bookmarklet

