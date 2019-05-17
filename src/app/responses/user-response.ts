import { User } from '../models/user';

export class UserResponse 
{
    code: string;
    content: Array<User>;
}