import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  public showlist(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  public deletelist(id: any): Observable<any[]> {
    return this.http.delete<any[]>(this.url + '/' + id);
  }
  public updateList(id: any, body: any): Observable<any[]> {
    return this.http.put<any[]>(this.url + '/' + id, body)
  }
}
