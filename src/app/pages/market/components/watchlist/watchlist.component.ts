import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'Watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  public startIcon = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
