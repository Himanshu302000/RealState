import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Properties } from '../propertyform/propertyform.component';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  property:Properties;
  id:number=-1;

  constructor(private propertyservice:PropertiesServiceService,
    private route:ActivatedRoute,private router:Router){};

    updateForm(){
      console.log("Update field working");
      this.propertyservice.updateProperty(this.property).subscribe(res=>{
        console.log(res);
        alert("Property Updated");
        this.router.navigate(['houses',this.property.userId])

      })
    }

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.propertyservice.getPropertyById(this.id).subscribe(res=>{
        this.property=res;
        console.log(this.property);
      })
  }

}
