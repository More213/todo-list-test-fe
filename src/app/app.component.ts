import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';


export interface TodoData {
  id?: string,
  text: string,
  isCompleted: boolean
}

export interface DialogData {
  id?: string,
  title: string,
  todos: TodoData[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  constructor(public dialog: MatDialog) {}

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
