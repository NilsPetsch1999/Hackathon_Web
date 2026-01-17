# Issue: Create get todos Endpoint

## Original Description
Create an endpoint which fetches this api and return the result to the client. https://jsonplaceholder.typicode.com/todos

## Clarifications (from comments)
- github-actions[bot]: # Canonical Specification

## 1. Goal
Create an endpoint that fetches data from `https://jsonplaceholder.typicode.com/todos` and returns the result to the client.

**Understanding check:**  
Is this the correct and complete goal?

---

## 2. Context
A new endpoint is required to proxy or relay the todos data from an external API to clients.

**Understanding check:**  
Is this context accurate and sufficient?

---

## 3. In Scope
- Implementing an endpoint that calls `https://jsonplaceholder.typicode.com/todos`.
- Returning the fetched result to the client.

**Understanding check:**  
Is everything listed here intended to be in scope?

---

## 4. Out of Scope
- Any changes not directly related to the new todos-fetching endpoint.
- Refactoring unrelated code.

**Understanding check:**  
Are these exclusions correct?

---

## 5. Functional Requirements
1. The endpoint must fetch data from `https://jsonplaceholder.typicode.com/todos`.
2. The endpoint must return the fetched data to the client.

**Understanding check:**  
Do these requirements fully describe the expected behavior?

---

## 6. Non-Functional Constraints
- None specified.

**Understanding check:**  
Are there additional constraints not listed here?

---

## 7. Acceptance Criteria
- Given the endpoint is called, When it successfully fetches `https://jsonplaceholder.typicode.com/todos`, Then it returns the fetched data to the client.

**Understanding check:**  
Are these acceptance criteria sufficient to verify correctness?

---

## 8. Files / Components Involved
Not specified yet.

**Understanding check:**  
Are these the correct components to be affected?

---

## 9. Edge Cases
None identified.

**Understanding check:**  
Are there important edge cases missing?

---

## 10. Assumptions
None.

**Understanding check:**  
Are these assumptions valid?

---

## 11. Open Questions
- What is the exact route/path and HTTP method for the new endpoint?
- Should the response be a direct passthrough of the external API (status code, headers, body), or should it be transformed?
- How should errors from the external API be handled and reported to the client?
- Are there any authentication or rate-limiting requirements for this endpoint?
- Are there performance or caching expectations?

---

## 12. Implementation Readiness
❌ Not ready (open questions exist)

- NilsPetsch1999: What is the exact route/path and HTTP method for the new endpoint?
"/todos"
Should the response be a direct passthrough of the external API (status code, headers, body), or should it be transformed?
the response body should be returned from the external API the rest is from our server
How should errors from the external API be handled and reported to the client?
create log file where errors will be stored
Are there any authentication or rate-limiting requirements for this endpoint?
no authenthication and no rate limiting 
Are there performance or caching expectations?
i dont have really an expection in perfermance and caching expectation. 

- github-actions[bot]: # Canonical Specification

## 1. Goal
Create an endpoint that fetches data from `https://jsonplaceholder.typicode.com/todos` and returns the response body to the client.

**Understanding check:**  
Is this the correct and complete goal?

---

## 2. Context
A new server endpoint is needed to relay todos data from an external API to clients.

**Understanding check:**  
Is this context accurate and sufficient?

---

## 3. In Scope
- Add an endpoint at route `/todos`.
- Fetch data from `https://jsonplaceholder.typicode.com/todos`.
- Return the external API response body to the client.
- Log errors from the external API to a log file.

**Understanding check:**  
Is everything listed here intended to be in scope?

---

## 4. Out of Scope
- Changes unrelated to the new `/todos` endpoint.
- Authentication or rate limiting for this endpoint.
- Performance or caching work beyond basic implementation.

**Understanding check:**  
Are these exclusions correct?

---

## 5. Functional Requirements
1. The endpoint uses route `/todos`.
2. The endpoint fetches data from `https://jsonplaceholder.typicode.com/todos`.
3. The endpoint returns the external API response body to the client, while status code and headers come from our server.
4. On external API errors, the server writes error details to a log file.

**Understanding check:**  
Do these requirements fully describe the expected behavior?

---

## 6. Non-Functional Constraints
- No authentication.
- No rate limiting.
- No specific performance or caching expectations.

**Understanding check:**  
Are there additional constraints not listed here?

---

## 7. Acceptance Criteria
- Given a request to `/todos`, When the external API request succeeds, Then the server responds to the client with the external API response body.
- Given a request to `/todos`, When the external API request fails, Then the server logs the error to a log file.

**Understanding check:**  
Are these acceptance criteria sufficient to verify correctness?

---

## 8. Files / Components Involved
Not specified yet.

**Understanding check:**  
Are these the correct components to be affected?

---

## 9. Edge Cases
None identified.

**Understanding check:**  
Are there important edge cases missing?

---

## 10. Assumptions
None.

**Understanding check:**  
Are these assumptions valid?

---

## 11. Open Questions
- What HTTP method should the `/todos` endpoint use?
- What should the client receive when the external API request fails (status code and response body)?

---

## 12. Implementation Readiness
❌ Not ready (open questions exist)

- NilsPetsch1999: What HTTP method should the /todos endpoint use?
GET
What should the client receive when the external API request fails (status code and response body)?
return status code 200 if the external fails but add a flag which says it worked or not.

- github-actions[bot]: # Canonical Specification

## 1. Goal
Create a GET `/todos` endpoint that fetches todos from `https://jsonplaceholder.typicode.com/todos`, returns the external response body to the client, and logs external API errors to a log file while signaling success/failure.

**Understanding check:**  
Is this the correct and complete goal?

---

## 2. Context
A server endpoint is needed to relay todos data from an external API to clients, with server-controlled status/headers and error logging.

**Understanding check:**  
Is this context accurate and sufficient?

---

## 3. In Scope
- Add a GET endpoint at route `/todos`.
- Fetch data from `https://jsonplaceholder.typicode.com/todos`.
- Return the external API response body to the client on success (status code and headers come from our server).
- On external API failure, log error details to a log file.
- On external API failure, respond with HTTP 200 and include a flag indicating whether the external call succeeded.

**Understanding check:**  
Is everything listed here intended to be in scope?

---

## 4. Out of Scope
- Changes unrelated to the new `/todos` endpoint.
- Authentication or rate limiting for this endpoint.
- Performance or caching work beyond basic implementation.

**Understanding check:**  
Are these exclusions correct?

---

## 5. Functional Requirements
1. The server exposes a GET endpoint at `/todos`.
2. The endpoint performs a request to `https://jsonplaceholder.typicode.com/todos`.
3. On success, the endpoint returns the external API response body to the client, with status code and headers set by our server.
4. On external API failure, the endpoint returns HTTP 200 and includes a flag indicating success/failure.
5. On external API failure, the server writes error details to a log file.

**Understanding check:**  
Do these requirements fully describe the expected behavior?

---

## 6. Non-Functional Constraints
- No authentication.
- No rate limiting.
- No specific performance or caching expectations.

**Understanding check:**  
Are there additional constraints not listed here?

---

## 7. Acceptance Criteria
- Given a GET request to `/todos`, When the external API request succeeds, Then the server responds with the external API response body.
- Given a GET request to `/todos`, When the external API request fails, Then the server responds with HTTP 200 and a success/failure flag.
- Given a GET request to `/todos`, When the external API request fails, Then the server logs error details to a log file.

**Understanding check:**  
Are these acceptance criteria sufficient to verify correctness?

---

## 8. Files / Components Involved
Not specified yet.

**Understanding check:**  
Are these the correct components to be affected?

---

## 9. Edge Cases
None identified.

**Understanding check:**  
Are there important edge cases missing?

---

## 10. Assumptions
None.

**Understanding check:**  
Are these assumptions valid?

---

## 11. Open Questions
- What is the exact response structure and field name for the success/failure flag (and whether it is included on success as well)?
- What response body, if any, should be returned on external API failure beyond the flag?
- Where should the log file be written (path, naming), and is there a required log format?

---

## 12. Implementation Readiness
❌ Not ready (open questions exist)

- NilsPetsch1999: What is the exact response structure and field name for the success/failure flag (and whether it is included on success as well)?
response: {
body:  {}, 
failed: true/false,}

What response body, if any, should be returned on external API failure beyond the flag?
The response of the api return todo objects, just fetch the api one and u know the response
Where should the log file be written (path, naming), and is there a required log format?
it should be in the src folder folder in a log folder

- github-actions[bot]: # Canonical Specification

## 1. Goal
Create a GET `/todos` endpoint that fetches todos from `https://jsonplaceholder.typicode.com/todos`, returns the external response body in a wrapper object, and logs external API errors to a log file while signaling success/failure.

**Understanding check:**  
Is this the correct and complete goal?

---

## 2. Context
A server endpoint is needed to relay todos data from an external API to clients, with server-controlled status/headers and error logging.

**Understanding check:**  
Is this context accurate and sufficient?

---

## 3. In Scope
- Add a GET endpoint at route `/todos`.
- Fetch data from `https://jsonplaceholder.typicode.com/todos`.
- Respond with an object shaped like `{ body: <external response>, failed: true/false }`.
- On external API failure, return HTTP 200 and set `failed: true`.
- On external API failure, log error details to a log file in a `src/log` folder.

**Understanding check:**  
Is everything listed here intended to be in scope?

---

## 4. Out of Scope
- Changes unrelated to the new `/todos` endpoint.
- Authentication or rate limiting for this endpoint.
- Performance or caching work beyond basic implementation.

**Understanding check:**  
Are these exclusions correct?

---

## 5. Functional Requirements
1. The server exposes a GET endpoint at `/todos`.
2. The endpoint performs a request to `https://jsonplaceholder.typicode.com/todos`.
3. On success, the endpoint returns `{ body: <external response>, failed: false }` with status and headers set by the server.
4. On external API failure, the endpoint returns HTTP 200 and includes `failed: true`.
5. On external API failure, the server writes error details to a log file under `src/log`.

**Understanding check:**  
Do these requirements fully describe the expected behavior?

---

## 6. Non-Functional Constraints
- No authentication.
- No rate limiting.
- No specific performance or caching expectations.

**Understanding check:**  
Are there additional constraints not listed here?

---

## 7. Acceptance Criteria
- Given a GET request to `/todos`, When the external API request succeeds, Then the server responds with `{ body: <external response>, failed: false }`.
- Given a GET request to `/todos`, When the external API request fails, Then the server responds with HTTP 200 and `{ body: <…>, failed: true }`.
- Given a GET request to `/todos`, When the external API request fails, Then the server logs error details to a log file under `src/log`.

**Understanding check:**  
Are these acceptance criteria sufficient to verify correctness?

---

## 8. Files / Components Involved
Not specified yet.

**Understanding check:**  
Are these the correct components to be affected?

---

## 9. Edge Cases
None identified.

**Understanding check:**  
Are there important edge cases missing?

---

## 10. Assumptions
- On success, the server responds with HTTP 200.
- The server may choose a reasonable log filename/format if none is provided.

**Understanding check:**  
Are these assumptions valid?

---

## 11. Open Questions
- What should the `body` field contain when the external API request fails (empty object, error payload, or something else)?
- Is there a required log filename and format for error logging under `src/log`?

---

## 12. Implementation Readiness
❌ Not ready (open questions exist)

---

- NilsPetsch1999: What should the body field contain when the external API request fails (empty object, error payload, or something else)? like this:
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },"id": 80,
    "title": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
    "completed": true
  },
  {
    "userId": 5,
    "id": 81,
    "title": "suscipit qui totam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 82,
    "title": "voluptates eum voluptas et dicta",
    "completed": false
  },
  {
    "userId": 5,
    "id": 83,
    "title": "quidem at rerum quis ex aut sit quam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 84,
    "title": "sunt veritatis ut voluptate",
    "completed": false
  },
  {
    "userId": 5,
    "id": 85,
    "title": "et quia ad iste a",
    "completed": true
  },
  {
    "userId": 5,
    "id": 86,
    "title": "incidunt ut saepe autem",
    "completed": true
  },
  {
    "userId": 5,
    "id": 87,
    "title": "laudantium quae eligendi consequatur quia et vero autem",
    "completed": true
  },
  {
    "userId": 5,
    "id": 88,
    "title": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
    "completed": false
  },
  {
    "userId": 5,
    "id": 89,
    "title": "sequi ut omnis et",
    "completed": true
  },
  {
    "userId": 5,
    "id": 90,
    "title": "molestiae nisi accusantium tenetur dolorem et",
    "completed": true
  },
  {
    "userId": 5,
    "id": 91,
    "title": "nulla quis consequatur saepe qui id expedita",
    "completed": true
  },
  {
    "userId": 5,
    "id": 92,
    "title": "in omnis laboriosam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 93,
    "title": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
    "completed": true
  },
  {
    "userId": 5,
    "id": 94,
    "title": "facilis modi saepe mollitia",
    "completed": false
  },
  {
    "userId": 5,
    "id": 95,
    "title": "vel nihil et molestiae iusto assumenda nemo quo ut",
    "completed": true
  },
  {
    "userId": 5,
    "id": 96,
    "title": "nobis suscipit ducimus enim asperiores voluptas",
    "completed": false
  },
  {
    "userId": 5,
    "id": 97,
    "title": "dolorum laboriosam eos qui iure aliquam",
    "completed": false
  },
  {
    "userId": 5,
    "id": 98,
    "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
    "completed": true
  }
]

Is there a required log filename and format for error logging under src/log?
src/log/logfile.

- github-actions[bot]: # Canonical Specification

## 1. Goal
Create a GET `/todos` endpoint that fetches todos from `https://jsonplaceholder.typicode.com/todos`, returns a wrapped response with a success flag, and logs external API errors to a log file.

**Understanding check:**  
Is this the correct and complete goal?

---

## 2. Context
A server endpoint is needed to relay todos data from an external API to clients, while keeping server-controlled status/headers and capturing external API errors in a log file.

**Understanding check:**  
Is this context accurate and sufficient?

---

## 3. In Scope
- Add a GET endpoint at route `/todos`.
- Fetch data from `https://jsonplaceholder.typicode.com/todos`.
- Respond with an object shaped like `{ body: <response>, failed: true/false }`.
- On external API failure, return HTTP 200 and set `failed: true`.
- On external API failure, log error details to a file under `src/log/logfile`.

**Understanding check:**  
Is everything listed here intended to be in scope?

---

## 4. Out of Scope
- Changes unrelated to the new `/todos` endpoint.
- Authentication or rate limiting for this endpoint.
- Performance or caching work beyond basic implementation.

**Understanding check:**  
Are these exclusions correct?

---

## 5. Functional Requirements
1. The server exposes a GET endpoint at `/todos`.
2. The endpoint performs a request to `https://jsonplaceholder.typicode.com/todos`.
3. On success, the endpoint returns `{ body: <external response>, failed: false }` with status/headers set by the server.
4. On external API failure, the endpoint returns HTTP 200 and includes `failed: true`.
5. On external API failure, the endpoint returns a `body` containing todo objects in the same shape as the external API response (example provided in clarification).
6. On external API failure, the server writes error details to a log file at `src/log/logfile`.

**Understanding check:**  
Do these requirements fully describe the expected behavior?

---

## 6. Non-Functional Constraints
- No authentication.
- No rate limiting.
- No specific performance or caching expectations.

**Understanding check:**  
Are there additional constraints not listed here?

---

## 7. Acceptance Criteria
- Given a GET request to `/todos`, When the external API request succeeds, Then the server responds with `{ body: <external response>, failed: false }`.
- Given a GET request to `/todos`, When the external API request fails, Then the server responds with HTTP 200 and `{ body: <todo objects>, failed: true }`.
- Given a GET request to `/todos`, When the external API request fails, Then the server logs error details to `src/log/logfile`.

**Understanding check:**  
Are these acceptance criteria sufficient to verify correctness?

---

## 8. Files / Components Involved
Not specified yet.

**Understanding check:**  
Are these the correct components to be affected?

---

## 9. Edge Cases
None identified.

**Understanding check:**  
Are there important edge cases missing?

---

## 10. Assumptions
None.

**Understanding check:**  
Are these assumptions valid?

---

## 11. Open Questions
- What is the source of the `body` todo objects when the external API request fails (static example payload, cached data, or another fallback)?

---

## 12. Implementation Readiness
❌ Not ready (open questions exist)

---

- NilsPetsch1999: What is the source of the body todo objects when the external API request fails (static example payload, cached data, or another fallback)?an empty array maybe... i dont really care but it should be clean 




- github-actions[bot]: # Canonical Specification

## 1. Goal
Create a GET `/todos` endpoint that fetches todos from `https://jsonplaceholder.typicode.com/todos`, wraps the response with a failure flag, and logs external API errors to `src/log/logfile`.

**Understanding check:**  
Is this the correct and complete goal?

---

## 2. Context
A server endpoint is needed to relay todos data from an external API to clients, with server-controlled status/headers and error logging.

**Understanding check:**  
Is this context accurate and sufficient?

---

## 3. In Scope
- Add a GET endpoint at route `/todos`.
- Fetch data from `https://jsonplaceholder.typicode.com/todos`.
- Respond with an object shaped like `{ body: <response>, failed: true/false }`.
- On external API failure, return HTTP 200 and set `failed: true`.
- On external API failure, log error details to `src/log/logfile`.
- On external API failure, return an empty array in `body`.

**Understanding check:**  
Is everything listed here intended to be in scope?

---

## 4. Out of Scope
- Changes unrelated to the new `/todos` endpoint.
- Authentication or rate limiting for this endpoint.
- Performance or caching work beyond basic implementation.

**Understanding check:**  
Are these exclusions correct?

---

## 5. Functional Requirements
1. The server exposes a GET endpoint at `/todos`.
2. The endpoint performs a request to `https://jsonplaceholder.typicode.com/todos`.
3. On success, the endpoint returns `{ body: <external response>, failed: false }` with status and headers set by the server.
4. On external API failure, the endpoint returns HTTP 200 and `{ body: [], failed: true }`.
5. On external API failure, the server writes error details to a log file at `src/log/logfile`.

**Understanding check:**  
Do these requirements fully describe the expected behavior?

---

## 6. Non-Functional Constraints
- No authentication.
- No rate limiting.
- No specific performance or caching expectations.

**Understanding check:**  
Are there additional constraints not listed here?

---

## 7. Acceptance Criteria
- Given a GET request to `/todos`, When the external API request succeeds, Then the server responds with `{ body: <external response>, failed: false }`.
- Given a GET request to `/todos`, When the external API request fails, Then the server responds with HTTP 200 and `{ body: [], failed: true }`.
- Given a GET request to `/todos`, When the external API request fails, Then the server logs error details to `src/log/logfile`.

**Understanding check:**  
Are these acceptance criteria sufficient to verify correctness?

---

## 8. Files / Components Involved
Not specified yet.

**Understanding check:**  
Are these the correct components to be affected?

---

## 9. Edge Cases
None identified.

**Understanding check:**  
Are there important edge cases missing?

---

## 10. Assumptions
- On success, the server responds with HTTP 200.
- The log file is a single file located at `src/log/logfile` with no specified format.

**Understanding check:**  
Are these assumptions valid?

---

## 11. Open Questions
None.

---

## 12. Implementation Readiness
✅ Ready for implementation

