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
      if(this.service.isUserLoggedIn())
      {
        this.loggedIn=true;
        console.log("true");
      }
      else{
        this.loggedIn=false;
        console.log("false");
      }
  }

}
