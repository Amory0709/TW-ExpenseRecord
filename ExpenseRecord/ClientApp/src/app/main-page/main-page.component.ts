import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  expenseList: Expense[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onNewExpenseAdded($event: Expense) {
    console.log($event);
    this.expenseList.unshift($event);
    console.log(this.expenseList);
    
  }

  onDeleteClicked(item: Expense) {
    const toBeDeleted = this.expenseList.findIndex(i => i === item)
    this.expenseList.splice(toBeDeleted, 1)
  }

}
