const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/listings', proxy({target: 'http://localhost:3001', changeOrigin: true}))

app.get('/rooms/:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});