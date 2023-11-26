import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SceduleComponent } from './scedule/scedule.component';
import { StudentsComponent } from './students/students.component';
import { FilterComponent } from './filter/filter.component';
import {ApplyanceDialogComponent, CoursesComponent} from './courses/courses.component';
import { LessonsService } from './scedule/lessons.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'scedule', component: SceduleComponent},
  { path: 'students', component: StudentsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    SceduleComponent,
    StudentsComponent,
    FilterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatTreeModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes),
    ApplyanceDialogComponent,
    CoursesComponent,
    FormsModule
  ],
  providers: [ LessonsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
