import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../index.js";

dotenv.config();

// Connecting to the database before each test. 
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

// Closing database connection after each test.
afterEach(async () => {
  await mongoose.connection.close();
});


// Testing retrieve all books from the server
test("GET /getallbooks", async() => {
      const res = await request(app).get("/getallbooks");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
      console.log(res.body);
  });


// Testing retrieve a specific book by its ID
test ("GET /getonebook/:bookid",async()=>{
  const res = await request(app).get("/getonebook/64c264d6eed02add6cd2d27f");
  expect(res.statusCode).toBe(200);
  expect(res.body.book).toBe("hey");
  console.log(res.body)
});

// Testing add a new book to the collection
test ("POST /newbook",async()=>{
  const res = await request(app).post("/newbook").send({
    book:"Morning Times",
    author:"Muhammed sinvan althani"
  });
  expect(res.statusCode).toBe(201);
  expect(res.body.book).toBe("Morning Times");
});

//Testing Update an existing book by its ID
test ("PUT /updateonebook/:bookid",async()=>{
  const res = await request(app).put("/updateonebook/64c264d6eed02add6cd2d27f").send({
    author:"good"
  });
   expect(res.statusCode).toBe(200);
});

//Testing delete a book by its ID
test ("DELETE /deleteonebook/:bookid",async()=>{
  const res = await request(app).delete("/deleteonebook/64c495d53883372898e32239");
  expect(res.statusCode).toBe(200);
});