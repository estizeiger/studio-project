
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { Course } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatExpansionModule, MatButtonModule, NgFor],
})
export class CoursesComponent {
  coursesList: Course[] = 
  [ {class : 'ballet', title: 'Ballet', shortDescription: 'Ballet is a type of performance dance that originated during the Italian Renaissance in the fifteenth century', summary: 'Classical ballet reached its height in 19th- century Russia through the work of choreographers like Marius Petipa. The following elements characterize this style: graceful, flowing movements, classical form: turn-out of the legs and pointe work, balance and symmetry.'},
  { class : 'modern', title: 'Modern', shortDescription: 'Modern dance is a style completely devoid of all the restrictions imposed by classical ballet.', summary: 'Born at the beginning of the 20th century, it represents the rebellion of those artists who did not accept only classic performances, costumes and footwear.'},
  { class : 'lyrical', title: 'Lyrical', shortDescription: 'Lyrical dance is an offshoot of jazz and was initially known as \'lyrical jazz\' for that reason', summary: 'This style combines the fluidity of jazz with the disciplined techniques of ballet, an interesting fusion. One thing that is very specific to lyrical dance is the storytelling element and the emotional connection, which is linked to the song\'s lyrics, not just the rhythm of the music.'},
  { class : 'jazz', title: 'Jazz', shortDescription: 'Jazz dance is a form of dance that combines both African and European dance styles.', summary: 'This high-energy dance has a liveliness that sets it apart from traditional dance forms, such as classical ballet. Like jazz music, jazz dance features improvisation.'} ]

  constructor(public dialog: MatDialog) {
  }

  dialogConfig: MatDialogConfig = {}

  openDialog(courseName: string) {
    this.dialogConfig = { data: courseName}
    this.dialog.open(ApplyanceDialogComponent, this.dialogConfig);
  }
}

@Component({
  selector: './app-applyance-dialog',
  templateUrl: './applyance-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, 
    MatButtonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,],
})
export class ApplyanceDialogComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
    forthCtrl: [''],
    fifthCtrl: [''],
    sixthCtrl: ['', Validators.required],
    seventhCtrl: ['']
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}



}


