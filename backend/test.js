const router = require("./routes.js");
const supertest = require("supertest");

test("test home page route  / ", (done) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200); // note we have used .expect(200) above so this assertion is not neccesary. This is to show you how to check the statusCode in the res.
      done();
    });
});
