import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'SectorItem',
  templateUrl: './sector-item.component.html',
  styleUrls: ['./sector-item.component.scss']
})
export class SectorItemComponent implements OnInit {
  
  @Input()
  get image(): String { return this._image; }
  set image(image: String) {
    this._image = (image.length > 0 && image.trim()) || '';
  }
  @Input()
  get sectorname(): String { return this._sectorname; }
  set sectorname(sectorname: String) {
    this._sectorname = (sectorname.length > 0 && sectorname.trim()) || '';
  }
  @Input()
  get gains():number { return this._gains; }
  set gains(gains: number) {
    this._gains = gains;
  }

  public _image:String = '';
  public _sectorname:String = '';
  public _gains:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
