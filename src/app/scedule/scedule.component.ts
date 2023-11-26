import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lesson } from './lesson.model';
import { NgForm } from '@angular/forms';
import { LessonsService } from './lessons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scedule',
  templateUrl: './scedule.component.html',
  styleUrls: ['./scedule.component.css']
})
export class SceduleComponent implements OnInit, OnDestroy {

  lessonsList: Lesson[] = [];
  displayedColumns: string[] = ['lesson', 'instructor', 'level', 'day', 'hour', 'length'];
  lessonSubscription: Subscription;

  constructor(public lessonsService: LessonsService){}

  ngOnInit(): void {
    this.lessonSubscription = this.lessonsService.getLessonsListListener()
    .subscribe((lessons: Lesson[])=>{ this.lessonsList = lessons});
  }

  onCreateLesson(lessonForm: NgForm){
    if (lessonForm.invalid) {return;}

    const lesson: Lesson = {
      lessonName: lessonForm.value.lessonName,
      instructorName: lessonForm.value.instructorName,
      level: lessonForm.value.level,
      day: lessonForm.value.day,
      startHour: lessonForm.value.startHour,
      length: lessonForm.value.length
    }

    //send the new lesson to the service
    this.lessonsService.createLesson(lesson);
    lessonForm.reset();  
  }

  ngOnDestroy(): void {
    this.lessonSubscription.unsubscribe();
  }

}
