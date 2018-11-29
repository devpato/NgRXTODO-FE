import ToDo from "../models/todo.model";
import { Observable, of, from } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
  API_URL = "http://localhost:3000";
  TODO_URL = `${this.TODO_URL}/api/todos`;

  constructor(private http: HttpClient) {}
}
