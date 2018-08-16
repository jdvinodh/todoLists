
import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../shared/service/data.service';
import { map } from 'rxjs/operators';

import { GetTodoModel } from '../models/getTodo/getTodo.model';

@Injectable({
    providedIn: 'root',
  })
export class TodoService {

    getTodoUrl = this.dataService.apiEndPoint + 'getTodoLists';
    deleteTodoUrl = this.dataService.apiEndPoint + 'deleteTodo';

    constructor(private http: Http, private httpClient: HttpClient,  private dataService: DataService) { }

    // Get Todo
    getTodo(): Observable<GetTodoModel[]> {
        return this.http
            .get(this.getTodoUrl)
            .pipe(map((response: Response) => {
                return <GetTodoModel[]>response.json();
            }));
    }

    // Delete Todo
    deleteTodo(getTodoRes): Observable<any>  {
        console.log(getTodoRes);
        const Params = new HttpParams({
            fromObject: {
                'title': getTodoRes.title,
            }
        });
        return this.httpClient
            .post(this.deleteTodoUrl, Params, {
                params: Params
            });
    }

}
