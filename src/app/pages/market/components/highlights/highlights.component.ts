import { Component, OnInit } from '@angular/core';
import { SectorItem } from 'src/app/common/interfaces';

@Component({
  selector: 'Highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  public sectors:Array<SectorItem> = [
    {
      image : '',
      sectorname :'Health Care',
      gains : 0.46
    },
    {
      image : '',
      sectorname :'Industrials',
      gains : -0.78
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
