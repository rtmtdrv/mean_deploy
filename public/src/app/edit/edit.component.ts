import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet:{};
  editPet: any;
  err: any;


  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findPet();
    this.editPet = {name: "", type: "", description: "", skillOne: "", skillTwo:"", skillThree:""};
  }

  findPet(){
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.getOnePet(params["id"]);
      observable.subscribe((data:any)=>{
        this.editPet = data["pet"];
        console.log("Current Pet: ", this.editPet)
      })
    })
  }

  editSubmit(){
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.editPet(params["id"],this.editPet);
      observable.subscribe((data:any)=>{
        if(data.error){
          this.err = data['error']['errors'];
        }
        else{
          console.log("~Edit~");
          this._router.navigate(['/pets']);
        }
      })
    })
  }

}
