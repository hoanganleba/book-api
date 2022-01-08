import { Connection } from 'mongoose';
export declare const bookProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<unknown, {}, {}, {}>;
    inject: string[];
}[];
