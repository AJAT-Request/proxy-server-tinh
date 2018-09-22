const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/listings', proxy({target: 'http://ec2-18-144-8-154.us-west-1.compute.amazonaws.com:3001'}));
app.use('/reviews', proxy({target: 'http://ec2-13-57-210-179.us-west-1.compute.amazonaws.com:3002'}));
app.use('/bookingBox', proxy({target: 'http://ec2-18-217-121-164.us-east-2.compute.amazonaws.com:3003'}));

app.get('/rooms/:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


