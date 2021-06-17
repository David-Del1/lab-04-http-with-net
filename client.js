import net from 'net';

const client = net.connect(5000, 'localhost', () => {
  setInterval(() => {
    client.write('Hello');
  }, 1000);
});
