import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  searchText: string;
@Input('tasks') tasks;
  constructor() { }

  ngOnInit(): void {
  }
removeTask(index: number)
{
this.tasks.splice(index, 1)
localStorage.setItem("tasks",JSON.stringify(this.tasks))
}
}

