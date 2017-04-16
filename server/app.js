const express = require('express');
const path = require('path');
const data1 = require('./articles.json')
const data2 = require('./more-articles.json')

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/data/:end', (req, res) => {
  const { end } = req.params;
  let dataSet = end < 31 ? data1 : data2;
  let endRange = end > 30 ? end - 30 : end;
  let range = dataSet.slice(endRange - 10, endRange);
  return res.status(200).json(range);
});

app.get('/length', (req, res) => {
  let length = data1.length + data2.length;
  return res.status(200).json(length);
});

module.exports = app;
