export class Fligth {
    id: number;
    flightNumber: string;
    from: Date;
    to: Date;
    origin: string;
    destination: string;
    places: number;

    constructor(id: number, flightNumber: string, from: Date, to: Date, origin: string, destination: string,
                places: number)
    {
        this.id = id;
        this.flightNumber = flightNumber;
        this.from = from;
        this.to = to;
        this.origin = origin;
        this.destination = destination;
        this.places = places;
    }
}
