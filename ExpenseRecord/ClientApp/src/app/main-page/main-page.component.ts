import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNewExpenseAdded($event: Expense) {
    console.log($event);
  }

}
