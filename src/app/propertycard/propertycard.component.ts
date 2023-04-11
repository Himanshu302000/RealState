import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Properties } from '../propertyform/propertyform.component';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent implements OnInit {
  map = new Map(); 
  data:Properties[];
  property:Properties=new Properties();
  alreadyLiked:boolean=false;
  constructor(private service:PropertiesServiceService,private router:Router){}

  handleOwner(userId:number,id:number){
    console.log("Owner handled "+userId+" "+id);
    this.router.navigate(['owner',userId,id]);
  }

  doLike(itemId:number)
  {
    console.log("like handled");
    this.service.getPropertyById(itemId).subscribe(res=>{
      this.property=res;
      if(this.property.likes==null)
      {
        this.property.likes=0;
      }
      if(this.map.has(itemId))
      {
        this.property.likes-=1;
        this.map.delete(itemId);
      }
      else{
        this.property.likes+=1;
        this.alreadyLiked=true;
        this.map.set(itemId,true);
      }
      this.update();
    })
  }
  update()
  {
    this.service.updateProperty(this.property).subscribe(res=>{
      console.log(this.property.likes);
      this.refresh();
      this.alreadyLiked=true;
    })
  }
  refresh()
  {
    this.service.getAllData().subscribe(res=>{
      console.log(res);
      this.data=res;
    })
  }
  ngOnInit(): void {
      this.refresh();
  }

}
