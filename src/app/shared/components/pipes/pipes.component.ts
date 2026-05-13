import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {
  title: string = 'Angular Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptate nihil ipsa nulla ex quae, praesentium alias odit eveniet dolor! Sint quos minus reiciendis dicta saepe magnam aperiam mollitia quis?'

  constructor() { 

  }

  ngOnInit(): void {

  }

today = new Date();
price = 2500;
marks = 0.85;
num = 12.45678;

student = {
  name: 'Vishnu',
  age: 23,
  city: 'Mumbai'
};

numbers = [10,20,30,40,50];

obj = {
  id: 1,
  role: 'Developer'
};

}
