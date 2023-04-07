import { Component,OnInit } from '@angular/core';
import { People } from '../login/login.component';
import { HardCodedServicesService } from '../services/hardcode/hard-coded-services.service';
import { DataService } from '../services/loginService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean=false;
  id:number=-1;
  people:People;
  constructor(private service:HardCodedServicesService,private dataservice:DataService){}
  ngOnInit(): void {
      if(!this.service.isUserLoggedIn())
      {
        let user = sessionStorage.getItem('authenticateUser');
        this.id=Number(user);
        this.loggedIn=true;
        console.log(this.id+"-------");
        this.dataservice.getDataById(this.id).subscribe(res=>{
          this.people=res;
          console.log(res);
        })
      }
      else{
        this.loggedIn=false;
        console.log("false");
      }
  }

}
