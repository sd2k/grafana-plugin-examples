import { merge } from 'webpack-merge';

import grafanaConfig from './.config/webpack/webpack.config';

const pluginJson = require('./src/plugin.json');

const config = (env) =>
  merge(grafanaConfig(env), {
    // Add custom config here...
    output: {
      publicPath: `public/plugins/${pluginJson.id}/`,
    },
  });

export default config;
