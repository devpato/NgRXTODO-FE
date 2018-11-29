import { Component } from "@angular/core";
import { TodoService } from "./services/todo.service";
import ToDo from "./models/todo.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todoApp-angular";
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private todoService: TodoService
  ) {}

  //Declaring the new todo Object and initilizing it
  public newTodo: ToDo = new ToDo();

  //An Empty list for the visible todo list
  todosList: ToDo[];

  ngOnInit() {
    //At component initialization the
    this.todoService.getToDos().subscribe(todos => {
      //assign the todolist property to the proper http response
      this.todosList = todos;
      console.log(todos);
    });
  }
}
