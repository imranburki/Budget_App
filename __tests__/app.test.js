const supertest = require('supertest');
const express = require('express');
const app = require('../index'); // Replace with the actual path to your app.js

test('1 + 1 = 2',()=>{
    expect(1 + 1).toBe(2);
})
test('1 + 3 = 45',()=>{
  expect(1 + 3).toBe(44)
})
// describe('POST /test', () => {
//   test('should return status 200', async () => {
//     const response = await request(app).post("/test").send({
//       name:"testuser"
//     })
//     expect(response.statusCode).toBe(200);
//     // expect(response.text).toBe('User Page');
//   });

  // test('POST /budget/add should respond with status code 200', async () => {
  //   const response = await request(app).post('/budget/add').send({ budget: 1000 });
  //   expect(response.statusCode).toBe(200);
  // });

  // Add more tests for other routes similarly
// });

// Add more describe blocks for different routes if needed
