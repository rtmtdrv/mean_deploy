import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  pet : object;
  liked: boolean = false;

  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) {}


  ngOnInit() {
    this.findPet();
  }

  findPet(){
    this._route.params.subscribe((params)=>{
      console.log("~The ID in the URL is:", params["id"]+"~")
      let observable = this._httpService.getOnePet(params["id"]);
      observable.subscribe((data:any)=>{
        this.pet = data['pet'];
        console.log("Current Pet: ", this.pet);
      })
    })
  }

  deletePet(id:string){
    console.log("~Initializing deletePet~")
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      console.log("~Deleting Pet~")
      this._router.navigate(["/pets"]);
    })
  }

  likeButtonClick(){
    console.log('this.pet: ' , this.pet['likes'])
    this.pet['likes'] += 1;
    let observable = this._httpService.addLike(this.pet["_id"], {likes: this.pet['likes']});
    observable.subscribe(data =>{
      this.liked = true;
      console.log("Likes: ", this.pet['likes'])
    })
  }

}


