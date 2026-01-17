package fh.campus.demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.Instant;
import java.util.Collections;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Service
public class TodosService {
	private static final String TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
	private final RestTemplate restTemplate;
	private final Path logPath = Paths.get("src", "log", "logfile");

	public TodosService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	public TodosResponse fetchTodos() {
		try {
			Object body = restTemplate.getForObject(TODOS_URL, Object.class);
			return new TodosResponse(body, false);
		} catch (RestClientException ex) {
			logError(ex);
			return new TodosResponse(Collections.emptyList(), true);
		}
	}

	private void logError(Exception ex) {
		try {
			Files.createDirectories(logPath.getParent());
			StringWriter stringWriter = new StringWriter();
			ex.printStackTrace(new PrintWriter(stringWriter));
			String entry = Instant.now() + " " + stringWriter + System.lineSeparator();
			Files.writeString(logPath, entry, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
		} catch (IOException ignored) {
		}
	}
}
