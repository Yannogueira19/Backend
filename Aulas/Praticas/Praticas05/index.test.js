
const supertest = require("supertest");
const app = require("./index");
const request = supertest(app);


test ("Dev vim pra mim 200 e um JSON no GET", async function () {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 200 e um JSON no GET", async function () {
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 404 e um JSON no GET", async function () {
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 201 e um JSON no POST", async function () {
    const response = await request
    .post("/produtos")
    .send({ nome: "Uva", preco: 15.0 });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 422 e um JSON no POST", async function () {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMath(/json/);
})


test ("Dev vim pra mim 200 e um JSON no PUT", async function () {
    const response = await request
    .put("/produtos/1")
    .send({ nome: "Uva verde", preco: 18.0 });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 404 e um JSON no PUT", async function () {
    const response = await request.post("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 204 e um JSON no DELETE", async function () {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.headers["content-type"]).toMath(/json/);
})

test ("Dev vim pra mim 404 e um JSON no DELETE", async function () {
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMath(/json/);
})

