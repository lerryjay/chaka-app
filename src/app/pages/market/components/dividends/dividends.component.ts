import { Component, OnInit } from '@angular/core';
import { DividendItem } from 'src/app/common/interfaces';

@Component({
  selector: 'Dividends',
  templateUrl: './dividends.component.html',
  styleUrls: ['./dividends.component.scss']
})
export class DividendsComponent implements OnInit {

  public dividends:Array<DividendItem> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
