import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {

  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });


  cancel(): void {
    // need because creates new task if type > delete text > cancel
    if(this.data.task.title !== '' || this.data.task.description !== '') {
      this.dialogRef.close();
    }
    else {
      this.data.task.title = this.backupTask.title;
      this.data.task.description = this.backupTask.description;
      this.dialogRef.close(this.data);
    }
  }

  onSubmit(): void {
  }

}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}
