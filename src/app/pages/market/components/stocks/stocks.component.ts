import { Component, OnInit } from '@angular/core';
import { StockItem } from 'src/app/common/interfaces';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'Stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  public stocks:Array<StockItem> =  [
    {
      id:12,
      code : "BNGO",
      name : "Bionano Genomics Inc.",
      value : 1.39,
      gains  : 57.20,

    },
    {
      id:13,
      code : "APPL",
      name : "Apple Inc.",
      value : 135.355,
      gains  : -0.98,

    },
    {
      id:14,
      code : "INTC",
      name : "Intel Corp.",
      value : 49.495,
      gains  : 5.15,

    },
    {
      id:15,
      code : "GEVO",
      name : "Gevo Inc.",
      value : 4.70,
      gains  : -2.49,
    },
    {
      id:16,
      code : "FCEL",
      name : "Feulcell Energy Inc.",
      value : 10.69,
      gains  : -7.41,
    },
    {
      id:17,
      code : "SNAP",
      name : "Snap Inc - Class A",
      value : 50.68,
      gains  : 5.02,
    },
    {
      id:18,
      code : "AAL",
      name : "American Airlines Group Inc",
      value : 15.805,
      gains  : -1.59,
    },
    {
      id:19,
      code : "OCGN",
      name : "oCUGEN Inc",
      value : 2.08,
      gains  : -7.56,
    },
    {
      id:20,
      code : "PLTR",
      name : "Palantir Technologies Inc-  Class A",
      value : 24.685,
      gains  : -3.69,
    },
    {
      id:21,
      code : "GE",
      name : "General Electric Co.",
      value : 10.59,
      gains  : -0.47,
    },
  ];

  constructor(private manager : ManagerService) { }

  ngOnInit(): void {
  }

  toggleWatchList(stock:StockItem):void{
    const watchList = this.manager.watchList;
    const itemIndex = watchList.stocks.findIndex( item=> item.id == stock.id);
    itemIndex > -1 ? watchList.stocks.splice(itemIndex,1) : watchList.stocks.push(stock);
    console.log(this.manager.watchList);
  }

}
