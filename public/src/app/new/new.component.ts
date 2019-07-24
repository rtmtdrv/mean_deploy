import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet = {name:"", type:"", description:"", skillOne:"", skillTwo:"", skillThree:""};
  err: any;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  petSubmit(){
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe((data:any) => {
      console.log("~Creating Pet~")
      if(!data.error){
        this._router.navigate(["/pets"]);
        console.log("Data:", data)
      }
      else {
      this.err = data['error']['errors'];
      }
    })
  }

}
