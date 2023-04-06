import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../login/login.component';
import { Properties } from '../propertyform/propertyform.component';
import { DataService } from '../services/loginService/data.service';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  owner:People=new People();
  ownerId:number=-1;
  propertyId=-1;
  property_details:Properties=new Properties();
  constructor(private dataservice:DataService,private route:ActivatedRoute,private propertyservice:PropertiesServiceService,
    private router:Router){}

  handleOwnerProperties(id:number)
  {
    this.router.navigate(['ownerproperties',id]);
  }

  ngOnInit(): void {
    this.ownerId=this.route.snapshot.params['userId'];
    this.propertyId=this.route.snapshot.params['id'];
      this.dataservice.getDataById(this.ownerId).subscribe(res=>{
        this.owner=res;
        console.log(this.owner)
      })

      this.propertyservice.getPropertyById(this.propertyId).subscribe(res=>{
        this.property_details=res;
      })
  }


}
