exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>Welcome To The VIP Section!</h3>
  <p>Here you can find proprietary details and specials about your next adventure!</p>
  `;

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    });
  } else {
    callback(null, {
      statusCode: 401
    });
  }
};
