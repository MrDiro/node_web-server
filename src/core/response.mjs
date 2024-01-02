'use strict';
import { ServerResponse, STATUS_CODES } from 'node:http';
import { platform, versions } from 'node:process';
import { Buffer } from 'node:buffer';

export class Response extends ServerResponse {

  constructor (req) {

    super(req);
  }

  /**
   * envía respuesta al cliente
   * @param { any } data
   */
  send (data = null, statuscode = 200) {

    const date = new Date();
    const code = (data == null) ? 400 : statuscode;
    const length = (data == null) ? 0 : Buffer.byteLength(data);

    this.setHeader('Allow', 'GET, POST, PUT, PATH');
    this.setHeader('Connection', 'close');
    this.setHeader('Date', date.toDateString());
    this.setHeader('Server', `Node / ${versions.node} (${platform})`);
    this.setHeader('Content-Length', length);
    this.setHeader('cache', 'no-store');

    this.statusCode = code;
    this.statusMessage = STATUS_CODES[code];

    this.end(data);
  }
}