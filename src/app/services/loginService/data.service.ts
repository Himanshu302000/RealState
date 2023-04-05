import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from 'src/app/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get<People[]>(`http://localhost:8080/get`);
  }

  postUserData(people:People)
  {
    return this.http.post<People>(`http://localhost:8080/post`,people)
  }

  getDataById(id:number)
  {
    return this.http.get<People>(`http://localhost:8080/getById/${id}`);
  }



}
