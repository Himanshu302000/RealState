import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/loginService/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  people:People=new People();
  data:People[]=[]
  constructor(private service:DataService,private route: Router){}
  ngOnInit(): void {};
  validLogin:boolean=false;
  authenticate()
  {
    console.log("Authentication granted"+this.people.email+" "+this.people.password)
    this.service.getData().subscribe((res)=>{
      console.log(res);
      this.data=res;
      for (let i = 0; i < this.data.length; i++) {
        if(this.people.email===this.data[i].email && this.people.password===this.data[i].password)
        {
          this.validLogin=true;
          break;
        }
      }
      if(this.validLogin)
      {
        this.route.navigate(['houses']);
      }
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
