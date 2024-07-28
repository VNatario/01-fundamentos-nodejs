import http from "node:http";

// GET -> Busca um recurso no back-end
// POST -> Cria um recurso no back-end
// PUT -> Atualiza um recurso no back-end
// PATCH -> Atualiza uma informação específica de um recurso no back-end
// DELETE -> Deleta um recurso no back-end

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: "01",
      name: "Fulano de Tal",
      email: "fulanodetal@email.com",
    });
    return response.writeHead(201).end("");
  }

  return response.writeHead(404).end("Not Found... :(");
});

server.listen(3333);
