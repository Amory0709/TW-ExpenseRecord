import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-expense-submitter',
  templateUrl: './expense-submitter.component.html',
  styleUrls: ['./expense-submitter.component.css']
})
export class ExpenseSubmitterComponent implements OnInit {
  description: string = '';
  type: string  = '';
  amount: number = 0;
  date: string = '';
  @Output() addExpenseEvent: EventEmitter<Expense> = new EventEmitter<Expense>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.sendAddMessage();
    this.clearFormContent();
  }

  sendAddMessage(){
    this.addExpenseEvent.emit({
      description: this.description,
      type: this.type,
      amount: this.amount,
      date: this.date
    });
  }

  clearFormContent(){
    this.description = '';
    this.type = '';
    this.amount = 0;
    this.date = '';
  }

  isFormEmpty(){
    // TODO: validate value
  }

}
