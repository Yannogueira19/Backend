const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

test("Tem que me retornar 201 fazendo o favor e /produtos com um JSON NO POST", async function () {
  const response = await request
    .post("/produtos")
    .send({ nome: "uva", preco: 20.0 });
  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("id", 1);
  expect(response.body).toHaveProperty("nome", "uva");
  expect(response.body).toHaveProperty("preco", 20.00);
  expect(response.type).toMatch(/json/);
});

test("Tem que me retornar 200 fazendo o favor e com UM JSON NO GET", async function () {
  const response = await request.get("/produtos");
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test("Tem que me retornar 200 fazendo o favor e /produtos com um JSON NO GET", async function () {
  const response = await request.get("/produtos/1")
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("id", 1);
  expect(response.body).toHaveProperty("nome", "uva");
  expect(response.body).toHaveProperty("preco", 20.00);
  expect(response.type).toMatch(/json/);
});

test("Tem que me retornar 404 fazendo o favor e /produtos com um JSON NO GET", async function () {
  const response = await request.get("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});

test("Tem que me retornar 422 fazendo o favor e /produtos com um JSON NO POST", async function () {
  const response = await request.post("/produtos/100");
  expect(response.status).toBe(422);
  expect(response.body).toHaveProperty(
    "msg",
    "Nome e preco dos produtos são obrigatorios"
  );
});

test("Tem que me retornar 200 fazendo o favor e /produtos com um JSON NO PUT", async function () {
  const response = await request
    .put("/produtos/1").send({ nome: "uva verde", preco: 16.0 });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("id", 1);
  expect(response.body).toHaveProperty("nome", "uva verde");
  expect(response.body).toHaveProperty("preco", 16.00);
  expect(response.type).toMatch(/json/);
});

test("Tem que me retornar 404 fazendo o favor e /produtos com um JSON NO PUT", async function () {
  const response = await request.put("/produtos/100")
  expect(response.status).toBe(404);
  expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});

test("Deve retornar status 204 e sem Body no DELETE", async function () {
  const response = await request.delete("/produtos/1");
  expect(response.status).toBe(204);
  expect(response.body).toEqual({});
});

test("Tem que me retornar 404 fazendo o favor e /produtos com um JSON NO DELETE", async function () {
  const response = await request.delete("/produtos/100");
  expect(response.status).toBe(404);
  expect(response.body).toHaveProperty("msg", "Produto não encontrado");
});
