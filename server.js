const http = require('http');
const https = require('https');

const keys = require('./config')

const hostname = '127.0.0.1'
const port = 3000;

const getYelpData = https.get('https://api.yelp.com/v3/businesses/search?location=seattle&term=pizza', {
  headers: {
    'Authorization': `Bearer ${keys.apiKey}`
  }
}, res => {
  res.on('data', data => {
    process.stdout.write(data);
  })

  res.on('error', err => {
    process.stdout.write(err);
  })
});

const server = http.createServer(res => {
  res.statusCode = '200';
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`all-i-want-is-pizza server running at http://${hostname}:${port}/`);
});