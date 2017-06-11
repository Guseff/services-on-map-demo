const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/on-map-services');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('connection error:', err.message);
});
db.once('open', () => {
  console.log('Connected to DB!');
});

const Schema = mongoose.Schema;

// Schemas
const Markers = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String },
  description: { type: String },
  cost: { type: Number },
  modified: { type: Date, default: Date.now },
  coords: { type: Array, default: [52.1, 23.7] },
});

const MarkersModel = mongoose.model('Markers', Markers);
module.exports.MarkersModel = MarkersModel;