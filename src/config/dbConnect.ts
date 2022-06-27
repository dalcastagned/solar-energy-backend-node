import mongoose from 'mongoose';

mongoose.connect('mongodb://docker:mongopw@localhost:49154');

let db = mongoose.connection;

export default db;
