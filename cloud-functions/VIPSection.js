exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>Welcome to the VIP Section!</h3>
  <p>Here we give you proprietary details and specials on your next adventure.</p>
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
