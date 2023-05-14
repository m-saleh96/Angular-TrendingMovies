import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {


  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  id:any;
  type:any;
  moviedetails:any;


  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) {
    this.type = _ActivatedRoute.snapshot.paramMap.get('type')
    this.id = _ActivatedRoute.snapshot.paramMap.get('id')


    _MoviesService.getItemDetails(this.type , this.id).subscribe((data)=>{
      this.moviedetails= data;

    })
   }

  ngOnInit(): void {
  }

}
