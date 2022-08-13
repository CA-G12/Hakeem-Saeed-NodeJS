const path = require('path');
const handler = require('./handler');

const router = (req, res) => {
  const endPoint = req.url;
  switch (endPoint) {
    case '/': {
      const filePath = path.join(
        __dirname,
        '..',
        'frontend',
        'pages',
        'home.html',
      );
      handler(res, filePath, 'text/html');

      break;
    }
    case '/reset.css': {
      const filePath = path.join(__dirname, '..', 'frontend', 'reset.css');
      handler(res, filePath, 'text/css');

      break;
    }
    case '/style.css': {
      const filePath = path.join(__dirname, '..', 'frontend', 'style.css');
      handler(res, filePath, 'text/css');

      break;
    }
    case '/js/dom.js': {
      const filePath = path.join(__dirname, '..', 'frontend', 'js', 'dom.js');
      handler(res, filePath, 'text/javascipt');

      break;
    }
    case '/js/logic.js': {
      const filePath = path.join(__dirname, '..', 'frontend', 'js', 'logic.js');
      handler(res, filePath, 'text/javascipt');

      break;
    }
    case '/js/fetch.js': {
      const filePath = path.join(__dirname, '..', 'frontend', 'js', 'fetch.js');

      handler(res, filePath, 'text/javascipt');

      break;
    }
    case '/users': {
      const filePath = path.join(__dirname, 'data.json');
      handler(res, filePath, 'application/json');
      break;
    }
    default: {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Not Found</h1>');
      break;
    }
  }
};

module.exports = router;
