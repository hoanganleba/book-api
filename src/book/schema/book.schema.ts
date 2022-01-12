import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, default: '', index: { text: true } },
  category: { type: String, default: '' },
  image: { type: String, default: '' },
  author: { type: String, default: '' },
  price: { type: String, default: '' },
  description: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
});
