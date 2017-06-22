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
  coords: { type: Array, required: true },
  status: { type: Number, default: 1 },
  executor: { type: String },
  exec_phone: { type: String },
  exec_text: { type: String },
  approve_date: { type: Date }
});

const MarkersModel = mongoose.model('Markers', Markers);
module.exports.MarkersModel = MarkersModel;