import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets(){
    return this._http.get("/pets");
  }

  getOnePet(id:string){
    return this._http.get("/pets/"+id);
  }

  addPet(newPet){
    console.log("ADDING PET")
    return this._http.post('/pets', newPet);
  }

  editPet(id:string, editPet:object){
    return this._http.put(`/pets/${id}`, editPet);
  }

  deletePet(id:string){
    return this._http.delete(`/delete/${id}`);
  }

  addLike(id:string, likes){
    console.log("~Adding Like to Database~")
    return this._http.post(`/like/${id}`,likes);
  }

}
