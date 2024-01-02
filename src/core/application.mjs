'use strict';
import { Server } from 'node:http';
import { Request } from './request.mjs';
import { Response } from './response.mjs';

export class Application {

  /** @type { Server } */
  #http;

  /** @type { number } */
  #port;

  /**
   * @param { number } port
   */
  constructor (port = 80) {

    this.#port = port;
    this.#http = new Server({ IncomingMessage: Request, ServerResponse: Response });
    this.#http.on('request', this.#requestHandler);
  }

  /**
   * @param { Request } req
   * @param { Response } res
   */
  #requestHandler (req, res) {

    console.log(req.url);
    res.send('GET /');
  }

  start () {

    this.#http.listen(this.#port, () => {

      console.log('Server is running');
    });
  }
}