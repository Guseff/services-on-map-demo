const express = require('express');
const app = express();
const port = 3001;

const MarkerModel = require('./db').MarkersModel;

app.use(express.static('../public/'));

// parse application/json
// app.use(bodyParser.json());

// MongoDB
// Markers
// get
app.get('/markers', (req, res) => MarkerModel.find((err, markers) => {
  if (!err) {
    console.log('Well Done!');
    return res.send(markers); // json
  }
  res.statusCode = 500;
  console.log('Internal error(%d): %s', res.statusCode, err.message);
  return res.send({ error: 'Server error' });
}));

// create
app.post('/markers', (req, res) => {
  const marker = new MarkerModel({
    title: req.body.title,
    author: req.body.author,
    coords: req.body.coords,
  });

  marker.save((err) => {
    if (!err) {
      console.log('marker created');
      return res.send({ status: 'OK', article });
    }
    console.log(err);
    if (err.name == 'ValidationError') {
      res.statusCode = 400;
      res.send({ error: 'Validation error' });
    } else {
      res.statusCode = 500;
      res.send({ error: 'Server error' });
    }
    console.log('Internal error(%d): %s', res.statusCode, err.message);
  });
});

// All others
// app.get('*', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });


app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
