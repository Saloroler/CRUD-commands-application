import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()

export class TocomService {

  constructor(
    public http: HttpClient
  ) { }
}
