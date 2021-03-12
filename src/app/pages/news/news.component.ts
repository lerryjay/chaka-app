import { Component, OnInit } from '@angular/core';

interface NewwFeedItem { 
  date:string;
  image:string;
  source:string;
  title:string;
  description:string;
  tags: Array<string>;

};

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public pageno:number  = 1;
  public limit:number = 10

  public feeds:Array<NewwFeedItem> = [
    {
      date : '06/12/2020 16:42:23',
      source:'Fintech Zoom',
      image : "",
      title:"Bionano Geenomics' (NASDAQ:BNGO) Share price us Down 56% Over THe Previous Yr.",
      tags: ['BNGO'],
      description: "Bionano Geenomics' (NASDAQ:BNGO) Share price us Down 56% Over THe Previous Yr.",
    },
    {
      date : '02/10/2020 17:00:04',
      source:'Yahoo Finance',
      image : "",
      title:"Bionano Geenomics, Inc. (BNGO) Upgraded to Buy: What Dies it mean for the Stock?.",
      description: "Bionano Geenomics' (NASDAQ:BNGO) Share price us Down 56% Over THe Previous Yr.",
      tags: ['BNGOW','BNGO'],
    },
    {
      date : '31/08/2020 17:00:04',
      source:'Yahoo Finance',
      image : "",
      title:"Bionano Geenomics, Inc. (BNGO) Upgraded to Buy: Here's Why.",
      description: "Bionano Geenomics' (NASDAQ:BNGO) Share price us Down 56% Over THe Previous Yr.",
      tags: ['BNGO','BNGOW'],
    },
    {
      date : '13/08/2020 22:09:02',
      source:'MarketScreener',
      image : "",
      title:"Bionano Genomics Reports Secong Quater 2020 Finncial Results and Provides Buisness Update | marketScreener",
      description: "SAN DIEGO, Aug 13,2020 -- Bionano Genomics, Inc. , a life sciebce instrumentation company that develops and markets Saphyr, a platform for ultra-sensitive and ul..",
      tags: ['BNGO','BNGOW'],
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  public getFeeds():void {
    
  }

}
