import { Component } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  studentList: Student[] = [
    {firstName: 'neomi', lastName: 'zuri',
      phone: '05698055', email: 'aa525@gmai;.com', 
      address: "hagefen 22 st. tlv", 
      dateOfBirth: new Date(), israeliId: 345678
    },

    {firstName: 'batia', lastName: 'levi',
    phone: '05698055', email: 'aa525@gmai;.com', 
    address: "hagefen 22 st. tlv", 
    dateOfBirth: new Date(), israeliId: 132526},

    {firstName: 'gili', lastName: 'catz',
    phone: '05698055', email: 'aa525@gmai;.com', 
    address: "hagefen 22 st. tlv", 
    dateOfBirth: new Date(), israeliId: 284324},
  ];

  displayedColumns: string[] = [ 'id', 'first name', 'last name', 
  'phone', 'email', 'address', 'date of birth'];
  dataSource = this.studentList;
}
