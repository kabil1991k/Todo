import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(task:[],searchText:string): any[] {
    if(!task) return [];
 if(!searchText) return task;

 searchText=searchText.toLowerCase();

return task.filter((task: string)=>{
  return task.toLowerCase().includes(searchText)
})
  }

}
