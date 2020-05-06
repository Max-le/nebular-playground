import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  SERVER_URL = 'https://cat-fact.herokuapp.com/facts'

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get(this.SERVER_URL);
  }
}