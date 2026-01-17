package fh.campus.demo;

import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withServerError;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

@SpringBootTest
@AutoConfigureMockMvc
class TodosControllerTests {
	private static final String TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private RestTemplate restTemplate;

	private MockRestServiceServer mockServer;
	private Path logPath;

	@BeforeEach
	void setUp() throws IOException {
		mockServer = MockRestServiceServer.createServer(restTemplate);
		logPath = Paths.get("src", "log", "logfile");
		Files.deleteIfExists(logPath);
	}

	@Test
	void getTodosSuccessReturnsBody() throws Exception {
		String responseJson = "[{\"userId\":1,\"id\":1,\"title\":\"delectus\",\"completed\":false}]";
		mockServer.expect(requestTo(TODOS_URL))
			.andRespond(withSuccess(responseJson, MediaType.APPLICATION_JSON));

		mockMvc.perform(get("/todos"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.failed").value(false))
			.andExpect(jsonPath("$.body[0].id").value(1));

		mockServer.verify();
	}

	@Test
	void getTodosFailureLogsAndReturnsFailedFlag() throws Exception {
		mockServer.expect(requestTo(TODOS_URL))
			.andRespond(withServerError());

		mockMvc.perform(get("/todos"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$.failed").value(true))
			.andExpect(jsonPath("$.body").isArray())
			.andExpect(jsonPath("$.body").isEmpty());

		Assertions.assertTrue(Files.exists(logPath));
		Assertions.assertFalse(Files.readString(logPath).isBlank());

		mockServer.verify();
	}
}
