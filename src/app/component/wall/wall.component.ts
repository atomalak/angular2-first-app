import { Component, OnInit } from '@angular/core';
import {Todo} from './../../shared/model/todo';
import { TodoService } from './../../services/todo.service'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  todos:Todo[];

  constructor(private todoservice:TodoService) { }

  ngOnInit() {
     this.todos=this.todoservice.GetTodos();
  }



  addTodo(todotext:HTMLInputElement){
     const obj={
       text:todotext.value,
       cdate:new Date()
     }
                       
     this.todoservice.AddTodo(obj);
     todotext.value="";
  }

  deleteTodo(todo:Todo) {
   this.todoservice.RemoveTodo(todo);

  }

}
