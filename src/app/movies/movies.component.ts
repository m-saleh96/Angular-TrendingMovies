import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies:any =[];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  
  constructor(private _MoviesService:MoviesService) { 
    _MoviesService.getTrending('movie').subscribe((data)=>{
      data.results.sort(function (a:any , b:any) {
        return a.vote_average - b.vote_average;
      })
      this.trendingMovies = data.results.reverse()
     

    });
  }

  ngOnInit():void {
  }

}
