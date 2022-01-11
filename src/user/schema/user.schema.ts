import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phoneNumber: String,
  address: String,
  username: String,
  password: String,
  created_at: { type: Date, default: Date.now },
});
