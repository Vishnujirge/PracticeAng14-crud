import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../module/itodo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass']
})
export class TodosListComponent implements OnInit {
 @Input() todos: Itodo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
