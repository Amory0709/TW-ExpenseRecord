import { HttpClient } from '@angular/common/http';
import { TaggedTemplateExpr } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl: string;
  private http: HttpClient;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getExpenseList(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.baseUrl + 'expenses', { responseType: 'text' as 'json' })
    .pipe(
      map(res => res as Expense[])
    );
  }

  addExpense(expense: Expense): Observable<boolean> {
    return this.http.post<number>(this.baseUrl + 'expenses', { responseType: 'text' as 'json', body: expense })
    .pipe(
      map( res => res === 200)
    );
  }

  deleteExpense(expense: Expense): Observable<boolean> {
    return this.http.post<number>(this.baseUrl + 'expenses', { responseType: 'text' as 'json',  body: expense})
    .pipe(
      map( res => res === 200)
    );
  }
}
