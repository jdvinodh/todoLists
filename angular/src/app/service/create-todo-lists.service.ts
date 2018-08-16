
import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { DataService } from '../shared/service/data.service';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
  })
export class CreateTodoService {
    createTodoUrl = this.dataService.apiEndPoint + 'createTodo';

    constructor(private http: Http, private httpClient: HttpClient,  private dataService: DataService) { }

    createTodo(title, details, assignTo, assignedBy): Observable<any> {
        const Params = new HttpParams({
            fromObject: {
                'title': title,
                'details': details,
                'assignTo': assignTo,
                'assignedBy': assignedBy
            }
        });
        return this.httpClient
            .post(this.createTodoUrl, Params, {
                params: Params
            });
    }

}
