import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseModel } from '../interfaces/BaseModel';
import { IServices } from '../interfaces/IServices';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseModel> implements IServices<T>  {



  constructor(protected _httpClient: HttpClient) 
  {
    _httpClient = _httpClient;
  }

  public getById(url: string) : Promise<HttpResponse<T>>
  {
    return this._httpClient.get<T>(url, {observe: 'response'}).toPromise();
  }

  public get(url: string) : Promise<HttpResponse<T[]>>
  {
    return this._httpClient.get<T[]>(url, {observe: 'response'}).toPromise();
  }

  public update(url: string, body: T) : Promise<HttpResponse<T>>
  {
    return this._httpClient.put<T>(url, body, {observe: 'response'}).toPromise();
  }

  public post(url: string, body: T) : Promise<HttpResponse<T>>
  {
    return this._httpClient.post<T>(url, body, {observe: 'response'}).toPromise();
  }


  public delete(url: string) : Promise<HttpResponse<T>>
  {
    return this._httpClient.delete<T>(url, {observe: 'response'}).toPromise();
  }


}
