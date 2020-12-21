import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { App } from './app';

createConnection()
  .then(async () => {
    const app: App = new App();
    app.startServer();
  })
  // tslint:disable-next-line: no-console
  .catch(error => console.log(error));
