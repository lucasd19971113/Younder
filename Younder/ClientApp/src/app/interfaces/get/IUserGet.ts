import { BaseModel } from "../BaseModel";

export interface IUserGet extends BaseModel
{
    id: number,
    name: string,
    lastname: string,
    dataNascimento: Date,
    status: UserStatus,
    email: string
}

export interface IDetailedUserGet extends BaseModel
{
    name: string,
    lastname: string,
    dataNascimento: Date,
    createdAt: Date,
    modifiedAt: Date,
    status: UserStatus,
    phoneNumber: string,
    cpf: string,
    email: string,
    country: string
}

export enum UserStatus{
    Active = 1,
    Inactive = 0
}
