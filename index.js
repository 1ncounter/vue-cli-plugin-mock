const express = require('express');

module.exports = (api, options) => {
  const mockOptions = (options.pluginOptions && options.pluginOptions.mock) || {};
  const entry = mockOptions.entry || 'mock/index.js';
  mockOptions.entry = api.resolve(entry);

  api.configureDevServer((app, server) => {
    const prefix = mockOptions.prefix || '/mock';

    app.use(prefix, express.json());
    app.use(prefix, express.urlencoded({ extended: true }));

    app.use(prefix, require('./lib/mock')(api, mockOptions));
  });
};

module.exports.defaultModes = {
  mock: 'development',
};
