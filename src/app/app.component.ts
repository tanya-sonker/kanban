import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Task } from './task/task';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';

  constructor(private dialog: MatDialog) {}

  test1: Task =  {
    title: 'Feature Meeting',
    description: 'Prep for PWA demo'
  };

  test2: Task = {
    title: 'Create a kanban app',
    description: 'Using firebase and angular'
  };

  todo: Task[] = [this.test1, this.test2];
  inProgress: Task[] = [];
  done: Task[] = [];

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: { task: {} }
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        if(!result) {
          return;
        }
        this.todo.push(result.task);
      });
  }

  editTask(list: string, task: Task): void{};

  drop(event: CdkDragDrop<Task[]>): void{
    // check if dropping in same list as the one task is coming from
    if(event.previousContainer === event.container) {
      return;
    }
    if(!event.container.data || !event.previousContainer.data) {
      return;
    }
    // if not, transfer current task to destination
    transferArrayItem(
      event.previousContainer.data, 
      event.container.data, 
      event.previousIndex, 
      event.currentIndex
    );
  }
}
