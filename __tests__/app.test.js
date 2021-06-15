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
      .post('/echo');

    expect(res.text).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 0
Content-Type: text/plain\r
\r`);
  });
});
