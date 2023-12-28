'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    '@embroider/macros': {
      // this is how you configure your own package
      setOwnConfig: {
        // your config goes here
      },
      // this is how you can optionally send configuration into your
      // dependencies, if those dependencies choose to use
      // @embroider/macros configs.
      setConfig: {
        'v2-macro-repro': {
          // config for some-dependency
        },
      },
    },
    autoImport: {
      watchDependencies: ['v2-macro-repro'],
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
