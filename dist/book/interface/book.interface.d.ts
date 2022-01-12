import { Document } from 'mongoose';
export interface Book extends Document {
    readonly title: string;
    readonly category: string;
    readonly image: string;
    readonly author: string;
    readonly price: string;
    readonly created_at: Date;
}
