import { Fligth } from './fligth';

export class User {
    id: number;
    username: string;
    password: string;
    role: string;
    bookings: Array<Fligth>;

    constructor(username: string,  password: string, role: string, bookings?: Array<Fligth>) {
        this.username = username;
        this.role = role;
        this.password = password;
     }

}
