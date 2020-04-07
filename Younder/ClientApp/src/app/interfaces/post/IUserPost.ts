import { UserStatus } from "../get/IUserGet";
import { BaseModel } from "../BaseModel";

export interface IUserPost extends BaseModel
{
    name: string,
    lastname: string,
    birth: Date,
    phoneNumber: string,
    cpf: string,
    email: string,
    country: string,
    status: UserStatus,
    createdAt: Date,
    modifiedAt: Date
}