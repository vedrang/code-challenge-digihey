const app = require("../app");
const request = require("supertest");
describe("Route /encode/:string", () => {
  test("should return properly encoded value", async () => {
    const input ='aaa'
    const response = await request(app)
        .get(`/encode?value=${input}`)
        .set('Authorization','xyz0987654321')
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('a3')
  });

  test("should return 401 when no authorization header is provided", async () => {
    const input ='aaa'
    const response = await request(app)
        .get(`/encode?value=${input}`)
    expect(response.statusCode).toBe(401);
  });
});
