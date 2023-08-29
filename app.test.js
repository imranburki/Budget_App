const request = require('supertest');
const express = require('express');
const app = require('./index.js'); // Replace with the actual path to your app.js

describe('Express app routes', () => {
  describe('GET /test', () => {
    test('should return status 200 and "User Page"', async () => {
      const response = await request(app).get('/test');
      expect(response.status).toBe(200);
      expect(response.text).toBe('User Page');
    });
  });

  // test('POST /budget/add should respond with status code 200', async () => {
  //   const response = await request(app).post('/budget/add').send({ budget: 1000 });
  //   expect(response.statusCode).toBe(200);
  // });

  // Add more tests for other routes similarly
});

// Add more describe blocks for different routes if needed
