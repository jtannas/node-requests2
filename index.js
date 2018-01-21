const request = require('request');
const fs = require('fs');

const url = 'https://sytantris.github.io/http-examples/future.jpg';
const filename = url.split('/').pop();

request.get(url)
  .on('error', err => { throw err; })
  .on('response', response => {
    console.log(`Response Code: ${response.statusCode} - ${response.statusMessage}`);
    console.log(`content-type: ${response.headers['content-type']}`);
    console.log('... Download beginning ...');
  })
  .pipe(fs.createWriteStream(filename)
    .on('error', err => { throw err; })
    .on('finish', end => console.log('--- Download Complete ---'))
  );
