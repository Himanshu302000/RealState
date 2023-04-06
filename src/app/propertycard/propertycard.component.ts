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
  data:Properties[];
  constructor(private service:PropertiesServiceService,private router:Router){}

  handleOwner(userId,id){
    console.log("Owner handled "+userId+" "+id);
    this.router.navigate(['owner',userId,id]);
    
  }

  ngOnInit(): void {
      this.service.getAllData().subscribe(res=>{
        console.log(res);
        this.data=res;
      })
  }

}
