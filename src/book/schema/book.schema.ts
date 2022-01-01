import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, index: { text: true } },
  image: String,
  author: String,
  price: String,
  created_at: { type: Date, default: Date.now },
});
