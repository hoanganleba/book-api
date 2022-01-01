import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://hoanganleba:megolio1998@cluster0.npceu.mongodb.net/test?retryWrites=true&w=majority',
      ),
  },
];
