import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(){
    let observable = this._httpService.getAllPets();
    observable.subscribe(data => {
      console.log("~Loading All Pets~", data)
      this.pets = data['pet'];
    });
  }

  deletePet(id:string){
    console.log("~Initializing deletePet~")
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      console.log("~Deleting Pet~")
      this.getAllPets();
    })
  }

}
