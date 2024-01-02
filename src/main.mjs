'use strict';
import { argv } from 'node:process';
import { parseArgs } from 'node:util';
import { Application } from './core/application.mjs';
import './core/colors.mjs';

(
  /**
   * principal entrada de la aplicación
   * @param { string[] } args
   */
  function main (args) {
    try {

      console.clear();

      const { values } = parseArgs({
        args: args,
        options: {
          port: {
            type: 'string',
            short: 'p',
            default: '3000'
          }
        }
      });

      const app = new Application(values.port);
      app.start();
    }
    catch (err) {

      console.log(`[server] ${Error(err).message}`.red);
    }
  }
)(argv.slice(2));