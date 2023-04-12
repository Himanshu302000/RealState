import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Properties } from '../propertyform/propertyform.component';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-manageproperties',
  templateUrl: './manageproperties.component.html',
  styleUrls: ['./manageproperties.component.css']
})
export class ManagepropertiesComponent implements OnInit {

  data:Properties[]=[];
  id:number=-1;
  constructor(private propertyservice:PropertiesServiceService,private route:ActivatedRoute,
    private router:Router){}

  handleUpdate(id:number)
  {
    console.log("Update id "+ id);
    this.router.navigate(['updateform',id]);
  }

  handleDelete(id:number){
    console.log("Delete handled");
    this.propertyservice.deleteProperty(id).subscribe(res=>{
      console.log("item deleted");
      this.refreshProperties();
    })
  }

  refreshProperties(){

    this.propertyservice.getPropertiesByUserId(this.id).subscribe(res=>{
      this.data=res;
      console.log(this.data);
    })

  }

  handleAdd()
  {
    console.log("Handle add items");
    this.router.navigate(['propertiesform',this.id]);
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.refreshProperties();
      
  }
  
}
