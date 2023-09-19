import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  assignments = [
    {
      name: 'Assignment 1',
      dueDate: '2021-01-01',
      submitted: true
    },
    {
      name: 'Assignment 2',
      dueDate: '2021-01-02',
      submitted: false
    },
    {
      name: 'Assignment 3',
      dueDate: '2021-01-03',
      submitted: false
    }
  ];
}
