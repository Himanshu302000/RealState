import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Properties } from '../propertyform/propertyform.component';
import { PropertiesServiceService } from '../services/properties/properties-service.service';
import { PropertyLikeServiceService } from '../services/propertylikes/property-like-service.service';

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
  valid:boolean;
  likeuser:PropertyLikes=new PropertyLikes();
  idd:number=-1;
  constructor(private service:PropertiesServiceService,private router:Router,private prolikeservice:PropertyLikeServiceService,
    private route:ActivatedRoute){}

  handleOwner(userId:number,id:number){
    console.log("Owner handled "+userId+" "+id);
    this.router.navigate(['owner',userId,id]);
  }

  doLike(itemId:number,userId:number)
  {
    console.log(this.idd+" "+itemId);
    console.log("like handled");
    this.service.getPropertyById(itemId).subscribe(res=>{
      this.property=res;
      this.prolikeservice.checkUser(this.idd,itemId).subscribe(index=>{
        console.log(index+"---->>"+typeof index);
        if(this.property.likes==null)
        {
          this.property.likes=0;
        }
        if(this.map.has(itemId) || index!==-1)
        {
          this.property.likes-=1;
          if(this.map.has(itemId))
          {this.map.delete(itemId);}

          if(index!==-1)
          {
            this.prolikeservice.deleteById(index).subscribe(del=>console.log("Deleted Successfully"));
            index=-1;
          }
        }
        else{
          this.property.likes+=1;
          this.alreadyLiked=true;
          this.map.set(itemId,true);
          this.likeuser.userId=this.idd;
          this.likeuser.propertyId=itemId;
          this.prolikeservice.createUser(this.likeuser).subscribe(response=>console.log(response));
        }
        this.update();
      });
    })
  }

  update()
  {
    this.service.updateProperty(this.property).subscribe(res=>{
      // console.log(this.property.likes);
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
    this.idd=this.route.snapshot.params['id'];
      this.refresh();
  }

}
export class PropertyLikes
{
  userId:number=-1;
	propertyId:number=-1;
  id:number=-1;
}
