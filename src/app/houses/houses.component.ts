import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../login/login.component';
import { DataService } from '../services/loginService/data.service';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  id:number=-1;
  people:People=new People();
  constructor(private route:ActivatedRoute,private service:DataService,private router:Router,
    private propertyservice:PropertiesServiceService)
  {

  }
  handleManageProperties()
  {
    console.log("Manage Properties");
    this.router.navigate(['manageproperties',this.id]);
  }
  handleAdd()
  {
    console.log("Entered propertyhandler");
    this.router.navigate(['propertiesform',this.id]);
  }

  handleView()
  {
    console.log("Handle View");
    this.router.navigate(['propertycard',this.id]);
  }

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      console.log(this.id);
      this.service.getDataById(this.id).subscribe(res=>{
        this.people=res;
        console.log(this.people.name)
      },
      error=>{
        console.log("error occured");
      })
  }
}
