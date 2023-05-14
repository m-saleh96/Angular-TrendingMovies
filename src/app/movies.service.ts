import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=060361c16c0ef01538ddbb6d01b0ab74`)

  }


  getItemDetails(mediaType:any ,id:any){
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=060361c16c0ef01538ddbb6d01b0ab74&language=en-US`)
  }

}
