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
  getAllData()
  {
    return this.http.get<Properties[]>(`http://localhost:8080/getProperties`);
  }
  getPropertyById(id:number)
  {
    return this.http.get<Properties>(`http://localhost:8080/getPropertyById/${id}`);
  }

  getPropertiesByUserId(id:number)
  {
    return this.http.get<Properties[]>(`http://localhost:8080/getPropertyByUserId/${id}`);
  }

  updateProperty(property:Properties)
  {
    return this.http.put(`http://localhost:8080/updateProperty`,property);
  }

  deleteProperty(id:number)
  {
    return this.http.delete(`http://localhost:8080/deleteProperty/${id}`);
  }
}
