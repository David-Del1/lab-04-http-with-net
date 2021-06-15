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

  it('Responds with an h1 tag with the word "red" in the body on GET and path = /red', async() => {
    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('Responds with an h1 tag with the word "green" in the body on GET and path = /green', async() => {
    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('Responds with an h1 tag with the word "blue" in the body on GET and path = /blue', async() => {
    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');
  });
});
