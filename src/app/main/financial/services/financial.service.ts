import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWish } from '../interfaces/IWish';

@Injectable({
  providedIn: 'root',
})
export class FinancialService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public createWish(wish: IWish): Observable<IWish> {
    return this.http.post<IWish>(`${this.baseUrl}/wishes`, wish);
  }

  public getWishes(): Observable<IWish[]> {
    return this.http.get<IWish[]>(`${this.baseUrl}/wishes`);
  }

  public deleteWish(id: string): Observable<IWish> {
    return this.http.delete<IWish>(`${this.baseUrl}/wishes/${id}`);
  }

  public editWish(id: string, newWish: IWish): Observable<IWish> {
    return this.http.patch<IWish>(`${this.baseUrl}/wishes/${id}`, newWish);
  }
}
