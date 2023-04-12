import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyLikes } from 'src/app/propertycard/propertycard.component';

@Injectable({
  providedIn: 'root'
})
export class PropertyLikeServiceService {

  constructor(private http:HttpClient) { }

  checkUser(userId:number,itemId:number)
  {
    return this.http.get<number>(`http://localhost:8080/checkUser/${userId}/${itemId}`);
  }

  createUser(prop:PropertyLikes)
  {
    return this.http.post<PropertyLikes>(`http://localhost:8080/createLikeUser`,prop);
  }

  getById(id:number)
  {
    return this.http.get<PropertyLikes>(`http://localhost:8080/getUserById/${id}`);
  }

  deleteById(id:number)
  {
    return this.http.delete(`http://localhost:8080/deleteuserLikeById/${id}`);
  }
}
