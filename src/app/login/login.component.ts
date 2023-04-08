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
  index:number=-1;
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
          this.index=this.data[i].id;
          break;
        }
      }
      if(this.validLogin)
      {
        sessionStorage.setItem('authenticateUser',this.index+"");
        this.route.navigate(['houses',this.index]);
      }
    })
  }
}
export class People{

  constructor(){}
  id:number=-1;
  password:String='';
  name:string;
  email:string='';

}
