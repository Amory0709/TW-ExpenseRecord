import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Expense } from '../models/expense.model';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  expenseList: Expense[] = [];
  // subscriptions: Subscription = new Subscription();

  constructor(private expenseService: ExpenseService) { 
    this.expenseService = expenseService;
  }

  ngOnInit(): void {
    // this.expenseList$ = this.expenseService.getExpenseList();
    this.expenseService.getExpenseList().subscribe(
      (res: any[]) => {
        this.expenseList = res;
      },
      err => console.error("Error occurs when get expense list.")
    );
  }

  onNewExpenseAdded($event: Expense) {
    console.log($event);
    this.expenseService.addExpense($event).subscribe(
      res => {
        if(res){
          // this.expenseList.unshift($event);
        } else{
          console.error("Cannot add this expense.");
        }
      },
      err => {
        console.error("Cannot add this expense. " + err);
      }
    );
  }

  onDeleteClicked(item: Expense) {
    this.expenseService.deleteExpense(item).subscribe(
      res => {
        if(res){
          // const toBeDeleted = this.expenseList.findIndex(i => i === item);
          // this.expenseList.splice(toBeDeleted, 1);
        } else{
          console.error("Cannot add this expense.");
        }
      },
      err => {
        console.error("Cannot add this expense. " + err);
      }
    );
  }

}
