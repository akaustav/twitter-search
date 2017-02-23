console.log('starting');
const fs = require('fs');
const Promise = require('bluebird');
const Twit = require('twit');
const config = require('./config');

Promise.promisifyAll(fs);

const T = new Twit(config);
Promise.promisifyAll(T);

console.log('fetching');

function getTweets(q) {
  return T.get('search/tweets', { q, count: 10 })
    .then(res => res.data.statuses)
    .then(data => data.map(e => `${e.text},${e.coordinates}`));
}

getTweets('carrots')
  .then(console.log)
