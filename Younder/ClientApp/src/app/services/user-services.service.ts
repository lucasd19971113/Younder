import { Injectable } from '@angular/core';
import { IUserServices } from '../interfaces/IUserServices';
import { BaseModel } from '../interfaces/BaseModel';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService<BaseModel> extends BaseService<BaseModel> implements IUserServices<BaseModel>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
