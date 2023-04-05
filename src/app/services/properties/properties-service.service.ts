import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Properties } from 'src/app/propertyform/propertyform.component';

@Injectable({
  providedIn: 'root'
})
export class PropertiesServiceService {

  constructor(private http:HttpClient) { }

  postUserData(prop:Properties)
  {
    return this.http.post<Properties>(`http://localhost:8080/postProperty`,prop)
  }
}
