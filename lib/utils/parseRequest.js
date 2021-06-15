module.exports = rawRequest => {
  const method = rawRequest.split('\n')[0].split(' ')[0];
  const path = rawRequest.split('\n')[0].split(' ')[1];
  const body = rawRequest.split('\r\n\r\n')[1];


  return {
    method,
    path,
    body
  };
};
