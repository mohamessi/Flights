import { Fligth } from './fligth';

export class User 
{
    constructor(public username: string, public password: string, public role: string, 
                public bookings?: Array<Fligth>) { }
}
