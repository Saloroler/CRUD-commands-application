import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()

export class TocomService {

  constructor(
    public http: HttpClient
  ) { }

  onSubmit(com){
    return this.http.post('https://jsonplaceholder.typicode.com/comments', com)
  }

}

