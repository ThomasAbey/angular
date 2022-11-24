import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../models/listitem.model';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {
  @Input('questionItem') item: ListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
