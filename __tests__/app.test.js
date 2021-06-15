const request = require('supertest');
const app = require('../lib/app');

describe('app routes',  () => {
  it('Responds with the word "hi" in body on GET and path = /', async() => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('Responds with a status code 200 and plain text on POST and path = /echo', async() => {
    const res = await request(app)
      .post('/echo')
      .send('Hello!');

    expect(res.text).toEqual('Hello!');
  });
});
