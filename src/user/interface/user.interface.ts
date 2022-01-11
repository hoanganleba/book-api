import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstname: string;
  readonly lastname: string;
  readonly phoneNumber: string;
  readonly address: string;
  readonly username: string;
  readonly password: string;
  readonly created_at: Date;
}
