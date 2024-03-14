const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("É obrigado a me retornar 200 no GET/", async function(){
    const yan = await request.get("/");
    expect(yan.status).toBe(200);
})

test("Me entregue os status 201 no POST/", async function() {
    const william = await request.post("/");
    expect(william.status).toBe(201);
})

test("Quero que me entregue os status 200 no PUT/", async function() {
    const gabriel = await request.put("/");
    expect(gabriel.status).toBe(200);
})

test("Vai me mandar os status 204 no DELETE/", async function() {
    const jade = await request.delete("/");
    expect(jade.status).toBe(204);
})


