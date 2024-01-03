'use strict';
import { argv } from 'node:process';
import { parseArgs } from 'node:util';
import { Soaring } from './core/soaring.mjs';
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
          },
          https: {
            type: 'boolean',
            short: 'p',
            default: false
          }
        }
      });

      const app = new Soaring({ port: values.port, https: values.https });

      app.start(() => {

        console.log('Server is running');
      });
    }
    catch (err) {

      console.log(`[server] ${Error(err).message}`.red);
    }
  }
)(argv.slice(2));