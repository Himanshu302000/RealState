import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../login/login.component';
import { HardCodedServicesService } from '../services/hardcode/hard-coded-services.service';
import { DataService } from '../services/loginService/data.service';

@Component({
  selector: 'app-headerlogin',
  templateUrl: './headerlogin.component.html',
  styleUrls: ['./headerlogin.component.css']
})
export class HeaderloginComponent implements OnInit {
  loggedIn:boolean=false;
  id:number=-1;
  people:People;
  constructor(private service:HardCodedServicesService,private dataservice:DataService,private router:Router){}
  handleLogOut(){
    this.service.LogOut();
    this.router.navigate(['']);
    console.log("Logout handled");
  }
  handleHome(){
    this.router.navigate(['houses',this.id])
  }
  ngOnInit(): void {
      if(this.service.isUserLoggedIn())
      {
        this.loggedIn=true;
        this.id=Number(sessionStorage.getItem('authenticateUser'));
        console.log(this.id+"-----------");
        this.dataservice.getDataById(this.id).subscribe(res=>{
          this.people=res;
        })
      }
  }
}
