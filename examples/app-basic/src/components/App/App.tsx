import * as React from 'react';
import { AppRootProps } from '@grafana/data';
import { PluginPropsContext } from '../../utils/utils.plugin';
import { Routes } from '../Routes';

// This line will fail with `ReferenceError: define is not defined` in the worker, because
// the script has been transpiled to look like:
// 
// ```
// define((()=>(console.log("hello world"),{})));
// //# sourceMappingURL=623.js.map
// ```
// @ts-ignore
const worker = new Worker(new URL('/worker.ts', import.meta.url), { type: 'module' });

export class App extends React.PureComponent<AppRootProps> {
  render() {
    return (
      <PluginPropsContext.Provider value={this.props}>
        <Routes />
      </PluginPropsContext.Provider>
    );
  }
}
