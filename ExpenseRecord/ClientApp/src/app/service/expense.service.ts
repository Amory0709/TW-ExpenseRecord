import { HttpClient } from '@angular/common/http';
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
    return this.http.get<string>(this.baseUrl + 'expenses', { responseType: 'text' as 'json' })
    .pipe(
      map(res => this.deserializeExpenseList(res)),
      tap( res => console.log(res))
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

  deserializeExpenseList(res: string): Expense[]{
    return JSON.parse(res) as Expense[];
  }
}
