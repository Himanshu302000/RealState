import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../login/login.component';
import { DataService } from '../services/loginService/data.service';
import { PropertiesServiceService } from '../services/properties/properties-service.service';

@Component({
  selector: 'app-propertyform',
  templateUrl: './propertyform.component.html',
  styleUrls: ['./propertyform.component.css']
})
export class PropertyformComponent implements OnInit {

  people:People=new People();
  newProperty:Properties=new Properties();
  id:number=-1;
  constructor(private route:ActivatedRoute,private service:DataService,
    private propertyservice:PropertiesServiceService,
    private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
      this.service.getDataById(this.id).subscribe(res=>{
        console.log(this.id);
        this.people=res;
      })
  }

  handleAddProperty(){
    this.newProperty.userId=this.id;
    this.newProperty.name=this.people.name;
    console.log(this.newProperty.address+"----"+this.newProperty.name);
    this.propertyservice.postUserData(this.newProperty).subscribe(res=>{
      console.log(res.name);
      alert("Property Successfully Added");
      this.router.navigate(['propertycard']);
    })
  }

}
export class Properties{
  name:string='';
  address:string='';
  url:string=''
  phone:string='';
  userId:number=-1;
  id:number=-1;
  description:string='';
  furnished='';
  likes:number=4;

}
