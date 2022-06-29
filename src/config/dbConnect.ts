import mongoose from 'mongoose';

mongoose.connect('mongodb://docker:mongopw@localhost:49153');

let db = mongoose.connection;

export default db;
