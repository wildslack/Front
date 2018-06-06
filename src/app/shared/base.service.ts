import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

 constructor() { }

 buildHttpHeader() {
    const httpOptions = {
      headers: new HttpHeaders({'wildslackauthorization': localStorage.getItem('WildslackAuthorization') })};
    return httpOptions;
    }
}
