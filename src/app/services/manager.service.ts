import { Injectable } from '@angular/core';
import { SectorItem, StockItem } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  public _watchList:{
    sectors:Array<SectorItem>;
    stocks:Array<StockItem>;
  } = { sectors  : [], stocks: [] };
  constructor() { }

  get watchList(){
    return this._watchList;
  }

  set watchList (watchList){ this._watchList = watchList; }
}
