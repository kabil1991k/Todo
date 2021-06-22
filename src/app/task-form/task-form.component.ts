import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
@Input() taskList;
newTask: string;
  constructor() { }

  ngOnInit(): void {
  }
addTodo()
{
this.taskList.unshift(this.newTask);
localStorage.setItem("tasks",JSON.stringify(this.taskList))
this.newTask="";
}
}
