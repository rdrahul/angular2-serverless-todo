import { Component, OnInit } from '@angular/core';
import { AngularFire , FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import {Task, AddTaskCommand } from '../../common/model';
import { config } from '../../common/config';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks : FirebaseListObservable<Task[]>;

  constructor( private http : Http , angularFire : AngularFire ) { 
    this.tasks = angularFire.database.list('tasks');
  }

  ngOnInit() {
  }

  addTask( content:string ){
    const command : AddTaskCommand = { content };
    console.log(`Adding task : ${ JSON.stringify(command)}`);
    this.http.post( config.addTaskUrl, command ).subscribe(
      () => console.log("Success"),
      error =>  alert(`adding task failed with error ${error}`)
    );
  }



}
