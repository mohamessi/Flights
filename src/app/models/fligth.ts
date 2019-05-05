import { User} from './user';

export class Fligth {
    flightNumber: string;
    from: Date;
    to: Date;
    origin: string;
    destination: string;
    places: number;
    users: Array<User>;
    

}
