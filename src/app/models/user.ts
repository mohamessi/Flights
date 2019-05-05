import { Fligth } from './fligth';

export class User {
    login: string;
    password: string;
    role: string;
    bookings: Array<Fligth>;
}
