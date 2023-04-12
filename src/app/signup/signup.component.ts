import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../login/login.component';
import { DataService } from '../services/loginService/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private service: DataService,private route:Router)
  {

  }
  people:People=new People();
  confirmpassword:string='';
  validSignUp:boolean=false;
  handleSignUp(){
    if(
      this.people.password!==this.confirmpassword
      ||
      this.people.password.length===0
      )
      {
        console.log("Wrong Details");
        return;
      }
    this.service.postUserData(this.people).subscribe(res=>{
      console.log(res);
      alert("Signed Up Successfully")
      this.route.navigate(['']);
    },
    error=>{
      console.log("error")
    }
    );
  }

}
