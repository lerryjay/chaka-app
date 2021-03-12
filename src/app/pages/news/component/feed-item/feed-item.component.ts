import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'FeedItem',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input()
  get image(): string { return this._image; }
  set image(image: string) {
    this._image = (image && image.trim()) || '<no name set>';
  }

  @Input()
  get title(): string { return this._title; }
  set title(title: string) {
    this._title = (title && title.trim()) || '<no name set>';
  }

  @Input()
  get date(): string { return this._date; }
  set date(date: string) {
    this._date = (date && date.trim()) || '<no date set>';
  }

  @Input()
  get source(): string { return this._source; }
  set source(source: string) {
    this._source = (source && source.trim()) || '<no name set>';
  }

  @Input()
  get description(): string { return this._description; }
  set description(description: string) {
    this._description = (description && description.trim()) || '<no name set>';
  }

  @Input()
  get tags(): Array<String> { return this._tags; }
  set tags(tags: Array<String>) {
    this._tags = tags.length > 0 ? tags : [];
  }

  public _title = '';
  public _date = '';
  public _source = '';
  public _description = '';
  public _image = '';
  public _tags: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to} its type is ${ typeof to }`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
  }

}
