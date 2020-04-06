const express = require('express');
const mockjs = require('mockjs');

module.exports = (api, options) => {
  const router = express.Router();
  const entry = options.entry;
  const routes = require(entry);

  for (const key in routes) {
    let template = routes[key];
    const [method, route] = key.split(' ');

    router[method.toLowerCase()](route, (req, res) => {
      const options = {
        path: req.path,
        query: req.query,
        body: req.body,
      };

      if (typeof template === 'function') {
        template = template(options);
      }

      res.send(mockjs.mock(template));
    });
  }

  return router;
};
