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
  author_id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  text: { type: String },
  description: { type: String },
  cost: { type: Number },
  modified: { type: Date, default: Date.now },
  coords: { type: Array, required: true },
  status: { type: Number, default: 1 },
  exec_id: { type: String },
  executor: { type: String, default: '' },
  exec_phone: { type: String, default: '' },
  exec_text: { type: String },
  approve_date: { type: Date, default: Date.now }
});

const Users = new Schema({
  name: { type: String, required: true },
  google_id: { type: String },
  photoURL: { type: String },
  email: { type: String },
  phone: { type: String },
});

const MarkersModel = mongoose.model('Markers', Markers);
const UsersModel = mongoose.model('Users', Users);
module.exports.MarkersModel = MarkersModel;
module.exports.UsersModel = UsersModel;