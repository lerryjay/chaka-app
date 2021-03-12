import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ManagerService } from 'src/app/services/manager.service';



@Component({
  selector: 'Watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  public startIcon = faStar;
  constructor( public manager : ManagerService) { }

  ngOnInit(): void {
  }

  

}
