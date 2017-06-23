const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const bodyParser = require('body-parser');
const MarkerModel = require('./db').MarkersModel;

app.use(express.static('../public/'));
app.use(cors());

// parse application/json
app.use(bodyParser.json());

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
    author: req.body.name,
    cost: req.body.cost,
    coords: req.body.coords,
    text: req.body.text,
  });

  marker.save((err) => {
    if (!err) {
      console.log('marker created');
      return res.send({ status: 'OK', marker });
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

app.put('/markers/:id', (req, res) =>
  MarkerModel.findById(req.params.id, (err, marker) => {
    if (!marker) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }

    const newMarker = new MarkerModel(
      Object.assign(
        marker,
        req.body
      )
    );

    return newMarker.save((err) => {
      if (!err) {
        console.log('marker updated');
        return res.send({ status: 'OK', marker });
      }
      if (err.name == 'ValidationError') {
        res.statusCode = 400;
        res.send({ error: 'Validation error' });
      } else {
        res.statusCode = 500;
        res.send({ error: 'Server error' });
      }
      console.log('Internal error(%d): %s', res.statusCode, err.message);
    });
  }
));

app.delete('/markers/:id', (req, res) => MarkerModel.findById(req.params.id, (err, marker) => {
  if (!marker) {
    res.statusCode = 404;
    return res.send({ error: 'Not found' });
  }
  return marker.remove((err) => {
    if (!err) {
      console.log('marker removed');
      return res.send({ status: 'OK' });
    }
    res.statusCode = 500;
    console.log('Internal error(%d): %s', res.statusCode, err.message);
    return res.send({ error: 'Server error' });
  });
}));


// All others
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});


app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
