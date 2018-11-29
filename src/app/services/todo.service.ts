import ToDo from "../models/todo.model";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class TodoService {
  API_URL = "http://localhost:3000";
  TODO_URL = `${this.TODO_URL}/api/todos`;

  constructor(private http: HttpClient) {}

  //Create todo, takes a ToDo Object
  createTodo(todo: ToDo): Observable<any> {
    //returns the observable of http post request
    return this.http.post(`${this.TODO_URL}`, todo);
  }

  //Read todo, takes no arguments
  getToDos(): Observable<ToDo[]> {
    return this.http.get(this.TODO_URL).pipe(
      map(res => {
        //Maps the response object sent from the server
        return res["data"].docs as ToDo[];
      })
    );
  }
  //Update todo, takes a ToDo Object as parameter
  editTodo(todo: ToDo) {
    let editUrl = `${this.TODO_URL}`;
    //returns the observable of http put request
    return this.http.put(editUrl, todo);
  }

  deleteTodo(id: string): any {
    //Delete the object by the id
    let deleteUrl = `${this.TODO_URL}/${id}`;
    return this.http.delete(deleteUrl).pipe(catchError(this.handleError));
  }

  //Default Error handling method.
  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
