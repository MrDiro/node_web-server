'use strict';
import { IncomingMessage } from 'node:http';
import { URL } from 'node:url';

export class Request extends IncomingMessage {

  constructor (socket) {

    super(socket);
  }

  get URL () {

    const _url = new URL(this.url, `http://${this.headers.host}`);

    return {
      href: _url.href,
      origin: _url.origin,
      host: _url.host,
      hostname: _url.hostname,
      path: _url.pathname,
      protocol: _url.protocol,
      port: _url.port,
      query: _url.searchParams,
      method: this.method
    };
  }

  get body () {

    return '';
  }
}