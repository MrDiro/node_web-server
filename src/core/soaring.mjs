'use strict';
import { Server as http } from 'node:http';
import { Server as https } from 'node:https';
import { Request } from './request.mjs';
import { Response } from './response.mjs';

export class Soaring {

  /** @type { Server } */
  #http;

  /** @type { number } */
  #port;

  /** @type { Array } */
  #middlewareFunctions;

  /**
   * Inicia la configuración del servidor http
   */
  constructor (config = { port: 80, https: false }) {

    this.#port = config.port;
    this.#middlewareFunctions = [];

    if (config.https == true) {

      this.#http = new https({ IncomingMessage: Request, ServerResponse: Response });
    }
    else {

      this.#http = new http({ IncomingMessage: Request, ServerResponse: Response });
    }

    this.#http.on('request', this.#requestHandler);
  }

  /**
   * @param { Request } req
   * @param { Response } res
   */
  #requestHandler (req, res) {

    res.send('ok');
  }

  /**
   * @param { () => void } callback
   */
  start (callback) {

    this.#http.listen(this.#port, callback);
  }
}