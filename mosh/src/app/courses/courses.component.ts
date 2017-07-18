import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']

})

export class CoursesComponent implements OnInit {

  title = 'List of Courses';
  someText = 'I was angry with my friend, I told my wrath, my wrath did end. I was angry with my foe, I told it not, my wrath did grow. And I watered it in fears, night and morning by my tears and I sunned it in smiles, and with soft deceitful wiles. And it grew both day and night, till it bore an apple bright';
  course = {
    title: 'The Complete Angular Course',
    rating: '4.6564654654654654',
    students: 30145,
    price: 190,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() {
    
  }

  ngOnInit() {
  }

}
