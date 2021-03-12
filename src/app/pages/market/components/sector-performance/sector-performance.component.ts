import { Component, OnInit } from '@angular/core';
import { SectorItem } from 'src/app/common/interfaces';

@Component({
  selector: 'SectorPerformance',
  templateUrl: './sector-performance.component.html',
  styleUrls: ['./sector-performance.component.scss']
})
export class SectorPerformanceComponent implements OnInit {
  public sectors:Array<SectorItem> = [
    {
      image : '',
      sectorname :'Health Care',
      gains : 0.46
    },
    {
      image : '',
      sectorname :'Commuincation Services',
      gains : 0.00
    },
    {
      image : '',
      sectorname :'Utilities',
      gains : 0.07
    },
    {
      image : '',
      sectorname :'Customer Discretory',
      gains : -0.07
    },
    {
      image : '',
      sectorname :'Financials ',
      gains : -0.33
    },
    {
      image : '',
      sectorname :'Consumer Staples',
      gains : -0.38
    },
    {
      image : '',
      sectorname :'Materials',
      gains : -0.42
    },
    {
      image : '',
      sectorname :'Technology',
      gains : -0.51
    },
    {
      image : '',
      sectorname :'Real Estate',
      gains : -0.55
    },
    {
      image : '',
      sectorname :'Energy',
      gains : -0.55
    },
    {
      image : '',
      sectorname :'Industrials',
      gains : -0.78
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
