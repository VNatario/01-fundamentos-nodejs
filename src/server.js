import http from "node:http";

// GET -> Busca um recurso no back-end
// POST -> Cria um recurso no back-end
// PUT -> Atualiza um recurso no back-end
// PATCH -> Atualiza uma informação específica de um recurso no back-end
// DELETE -> Deleta um recurso no back-end

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response.end("Listagem de usuários");
  }

  if (method === "POST" && url === "/users") {
    return response.end("Criação de usuário");
  }

  return response.end("Hello World");
});

server.listen(3333);
