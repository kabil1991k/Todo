import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo-List';
taskList: string[] = [];
ngOnInit(): void{
if(localStorage.getItem('tasks'))
{
  this.taskList=JSON.parse(localStorage.getItem('tasks'))
}
}
}
