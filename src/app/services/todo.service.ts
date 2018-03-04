import { Injectable } from '@angular/core';
import {Todo} from './../shared/model/todo';

@Injectable()
export class TodoService {

	todos: Todo[]=[
   {
     "text":"Angular 2 Öğren",
     "cdate":new Date()
   },
   {
     "text":"Firebase Öğren",
     "cdate":new Date()
   }


  ]

  constructor() { }

  AddTodo(obj){
   this.todos.push(obj);
  }

  RemoveTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  GetTodos(){
   
   return this.todos;

  }

}
