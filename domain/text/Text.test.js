const request = require("supertest");

const app = require("../../app");

// Testing GetReverseText
describe("/GET /api/texts/?text=test", () => {
  it(`respond with json containing inverted text and if it is palindome type`, (done) => {
    request(app)
      .get("/api/texts/?text=test")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it(`respond with json "error: "There was a mistake"`, (done) => {
    request(app)
      .get("/api/texts/?nonexistingtext")
      .set("Accept", "application/json")
      .expect(400, done);
  });
});
