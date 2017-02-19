function search() {
  var arr = [
    {text: 'Tweet 1', author: 'Sanghamitra', date: '2017-02-18'},
    {text: 'Tweet 2', author: 'Ameet', date: '2017-02-17'},
    {text: 'Tweet 3', author: 'Bapun', date: '2017-02-16'},
    {text: 'Tweet 4', author: 'Mamun', date: '2017-02-15'}
  ];

  displayTweets(arr);
}

function displayTweets(tweets) {
  var newListItem = undefined;
  var tweetsList = document.getElementById('tweetsList');

  for (i = 0; i < tweets.length; ++i) {
    var tweet = tweets[i];
    textNode = document.createTextNode(tweet.text + ' by ' + tweet.author + ' on ' + tweet.date);

    // Create the new list item
    newListItem = document.createElement('li');
    newListItem.appendChild(textNode);

    // Append the new list item to the existing list
    tweetsList.appendChild(newListItem);
  }
}

window.onload = function() {
  document.getElementById('search').addEventListener('click', search);
}
