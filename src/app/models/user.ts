import { Fligth } from './fligth';

export class User {
    id: number;
    login: string;
    password: string;
    role: string;
    bookings: Array<Fligth>;
}
