module.exports = rawRequest => {
  const method = rawRequest.split('\n')[0].split(' ')[0];
  const path = rawRequest.split('\n')[0].split(' ')[1];
  const body = rawRequest.split('\n')[4];

  return {
    method,
    path,
    body
  };
};
