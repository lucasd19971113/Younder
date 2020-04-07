import { BaseModel } from "./BaseModel";
import { HttpResponse } from "@angular/common/http";

export interface IServices<T extends BaseModel>
{
    get(url: string) : Promise<HttpResponse<T[]>>;

    getById(url: string) : Promise<HttpResponse<T>>;

    update(url: string, body: T) : Promise<HttpResponse<T>>;

    delete(url: string) : Promise<HttpResponse<T>>;

    post(url: string, body: T) : Promise<HttpResponse<T>>;
}