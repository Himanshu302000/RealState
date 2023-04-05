import { Component } from '@angular/core';
import { DataService } from '../services/loginService/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  people:People=new People();
  constructor(private service:DataService){}
  ngOnInit(): void {};
  authenticate()
  {
    console.log("Authentication granted"+this.people.email+" "+this.people.password)
    this.service.getData().subscribe((res)=>{
      console.log(res);
    })
  }
}
export class People{

  constructor(){}
  id:number=-1;
  password:String='';
  name:string='';
  email:string='';

}
