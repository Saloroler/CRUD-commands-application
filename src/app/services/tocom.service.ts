import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";


@Injectable()

export class TocomService {

  constructor(
    public http: HttpClient


  ) { }


  onSubmit(com) {
    return this.http.post('http://localhost:3012/users', com, {
      headers: new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8')
    });
  }

  getComm(){
    return this.http.get('http://localhost:3012/users');
  }
  removeComm(id){
    return this.http.delete('http://localhost:3012/users/:id', id)
  }

}

