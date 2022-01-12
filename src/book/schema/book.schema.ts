import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, index: { text: true } },
  category: String,
  image: String,
  author: String,
  price: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});
