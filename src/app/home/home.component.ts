import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any =[];
  trendingTv:any =[];
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService) { 


    _MoviesService.getTrending('movie').subscribe((data)=>{
      data.results.sort(function (a:any , b:any) {
        return a.vote_average - b.vote_average;
      })
      this.trendingMovies = data.results.reverse();

    });


    
    _MoviesService.getTrending('tv').subscribe((data)=>{
      data.results.sort(function (a:any , b:any) {
        return a.vote_average - b.vote_average;
      })
      this.trendingTv = data.results.reverse();

    })
   }

  ngOnInit(): void {
  }

}
