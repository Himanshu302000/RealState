import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../login/login.component';
import { Properties } from '../propertyform/propertyform.component';
import { DataService } from '../services/loginService/data.service';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-ownerproperties',
  templateUrl: './ownerproperties.component.html',
  styleUrls: ['./ownerproperties.component.css']
})
export class OwnerpropertiesComponent implements OnInit {

  userId:number;
  data:Properties[];

  people:People=new People();
  constructor(private propertyservice:PropertiesServiceService,private route:ActivatedRoute,
    private service:DataService){}
  
  ngOnInit(): void {
      this.userId=this.route.snapshot.params['ownerid'];
      console.log(this.userId);
      this.propertyservice.getPropertiesByUserId(this.userId).subscribe(res=>{
        this.data=res;
        console.log(this.data);
      })

      this.service.getDataById(this.userId).subscribe(res=>{
        this.people=res;
      })


  }
}
