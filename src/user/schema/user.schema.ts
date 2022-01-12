import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: { type: String, default: '' },
  lastname: { type: String, default: '' },
  phoneNumber: { type: String, default: '' },
  address: { type: String, default: '' },
  username: { type: String, default: '' },
  password: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
});
