'use strict';
import { IncomingMessage } from 'node:http';
import { URL } from 'node:url';

export class Request extends IncomingMessage {

  url;

  constructor (socket) {

    super(socket);
    this.url = '';
  }

  /**
   * @param { string } value
   */
  set url (value) {

    this.url = value;
  }

  get url () {

    const url = new URL(super.url, `http://${this.headers.host}`);

    return {
      href: url.href,
      origin: url.origin,
      host: url.host,
      hostname: url.hostname,
      path: url.pathname,
      protocol: url.protocol,
      port: url.port,
      query: url.searchParams,
      method: this.method
    };
  }

  get body () {

    return '';
  }
}