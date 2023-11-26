export interface Lesson {
    lessonName: string;
    instructorName: string;
    level: Level;
    day: Day;
    startHour: Date;
    length: number;
}

export enum Level {
    beginner,
    intermediate,
    pro
}

export enum Day {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
}