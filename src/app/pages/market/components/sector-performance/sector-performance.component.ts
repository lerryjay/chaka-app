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
      image : 'assets/images/healthcare.png',
      sectorname :'Health Care',
      gains : 0.46
    },
    {
      image : 'assets/images/communications.jpg',
      sectorname :'Commuincation Services',
      gains : 0.00
    },
    {
      image : 'assets/images/utility.jpg',
      sectorname :'Utilities',
      gains : 0.07
    },
    {
      image : 'assets/images/customer.jpg',
      sectorname :'Customer Discretory',
      gains : -0.07
    },
    {
      image : 'assets/images/finance.jpg',
      sectorname :'Financials ',
      gains : -0.33
    },
    {
      image : 'assets/images/consumer.jpg',
      sectorname :'Consumer Staples',
      gains : -0.38
    },
    {
      image : 'assets/images/material.jpg',
      sectorname :'Materials',
      gains : -0.42
    },
    {
      image : 'assets/images/technology.jpg',
      sectorname :'Technology',
      gains : -0.51
    },
    {
      image : 'assets/images/real-estate.jpg',
      sectorname :'Real Estate',
      gains : -0.55
    },
    {
      image : 'assets/images/energy.jpg',
      sectorname :'Energy',
      gains : -0.55
    },
    {
      image : 'assets/images/industrial.jpg',
      sectorname :'Industrials',
      gains : -0.78
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
