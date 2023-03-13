const app = require("../app");
const request = require("supertest");
describe("Route /login", () => {
  test("Should return 200 when provided with correct credentials ", async () => {
    const body = {
      email: "optimus.prime@autobots.com",
      password: "validPassword1234!",
    };
    const response = await request(app).post(`/login`).send(body);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({token:'xyz0987654321'})

  });

  test("Should return 401 when provided with wrong credentials", async () => {
    const body = {
      email: "megatron@autobots.com",
      password: "invalidPassword123456!",
    };
    const response = await request(app).post(`/login`).send(body);
    expect(response.statusCode).toBe(401);
  });
});
``