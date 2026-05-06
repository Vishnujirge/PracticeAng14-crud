import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../module/itodo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.sass']
})
export class TodosDashboardComponent implements OnInit {
 todosData: Itodo[] = [];

  constructor(private _todoService : TodoServiceService) { }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this._todoService.getTodos()
    .subscribe(
      (res)=>{
        console.log(res);
        this.todosData=res
      }

    )
  }

}
