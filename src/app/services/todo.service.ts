import ToDo from "../models/todo.model";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
  API_URL = "http://localhost:3000";
  TODO_URL = `${this.API_URL}/api/todos`;

  constructor(private http: HttpClient) {}
}
