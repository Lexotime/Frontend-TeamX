import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private httpClient: HttpClient) { }

  recupAllUser(){
    return this.httpClient.get("http://localhost:3000/user");
  }

  recupAllProduct(){
    return this.httpClient.get("http://localhost:3000/product");
  }
}
