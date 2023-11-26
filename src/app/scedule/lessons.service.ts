import { Day, Lesson, Level } from "./lesson.model";
import { Observable, Subject } from "rxjs";

export class LessonsService {
    private lessonsList: Lesson[] = [
        {lessonName: "ballet", 
        instructorName: "Moriah",
        level: Level.beginner,
        day: Day.MONDAY,
        startHour:  new Date(0, 0, 0, 16, 30, 0),
        length: 45},
    
        {lessonName: "ballet", 
        instructorName: "Moriah",
        level: Level.intermediate,
        day: Day.MONDAY,
        startHour:  new Date(0, 0, 0, 18, 0, 0),
        length: 90}, 
    
        {lessonName: "ballet", 
        instructorName: "Esti",
        level: Level.pro,
        day: Day.TUESDAY,
        startHour:  new Date(0, 0, 0, 18, 0, 0),
        length: 90}, 
    
        {lessonName: "Lyrical", 
        instructorName: "Esti",
        level: Level.pro,
        day: Day.TUESDAY,
        startHour:  new Date(0, 0, 0, 19, 30, 0),
        length: 90}, 
    
        {lessonName: "Modern", 
        instructorName: "Shula",
        level: Level.intermediate,
        day: Day.WEDNESDAY,
        startHour:  new Date(0, 0, 0, 18, 0, 0),
        length: 90}, 
    
        {lessonName: "Modern", 
        instructorName: "Shula",
        level: Level.pro,
        day: Day.WEDNESDAY,
        startHour:  new Date(0, 0, 0, 19, 30, 0),
        length: 90}, 
    
        {lessonName: "Jazz", 
        instructorName: "Yafit",
        level: Level.beginner,
        day: Day.FRIDAY,
        startHour:  new Date(0, 0, 0, 10, 0, 0),
        length: 90}, 
    
        {lessonName: "Jazz", 
        instructorName: "Yafit",
        level: Level.intermediate,
        day: Day.FRIDAY,
        startHour:  new Date(0, 0, 0, 11, 30, 0),
        length: 90}, 
      ]

    private lessonsListUpdated = new Subject<Lesson[]>();

    getLessonsListListener() : Observable<Lesson[]> {
        return this.lessonsListUpdated.asObservable();
    }

    createLesson(lesson: Lesson){
        this.lessonsList.push(lesson);
        this.lessonsListUpdated.next([...this.lessonsList])
    }
}