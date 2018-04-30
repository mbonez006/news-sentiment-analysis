# news-sentiment-analysis

## Usage
run: ```browserify sentiment.js -o bundle.js```
host bundle.js somewhere, lets say https://publicly-accessible-s3-location/bundle.js
Then create a bookmarklet script like below: (so create a browser bookmark and paste the code below into 'location' textbox): 

```javascript:(function%20()%20{%20%20%20var%20script%20=%20document.createElement('SCRIPT');%20%20%20script.src%20=%20'https://publicly-accessible-s3-location/bundle.js';%20%20%20document.body.appendChild(script);%20})()```

Go to BBC News website, open a news story, then click your bookmarklet - the title of the news should be updated with a bit of sentiment about that news. 

