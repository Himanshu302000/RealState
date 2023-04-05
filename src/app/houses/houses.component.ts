import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../login/login.component';
import { DataService } from '../services/loginService/data.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  id:number=-1;
  people:People=new People();
  constructor(private route:ActivatedRoute,private service:DataService)
  {

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
