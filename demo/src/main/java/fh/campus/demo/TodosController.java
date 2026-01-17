package fh.campus.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodosController {
	private final TodosService todosService;

	public TodosController(TodosService todosService) {
		this.todosService = todosService;
	}

	@GetMapping("/todos")
	public TodosResponse getTodos() {
		return todosService.fetchTodos();
	}
}
