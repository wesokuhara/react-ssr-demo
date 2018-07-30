import express from 'express';
import logger from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import App from '../client/components/App';
import template from '../client/template';

const PORT = 3000;
const server = express();
server.use(logger('tiny'));

server.get('/*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const app = (
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
  const body = renderToString(sheet.collectStyles(app));
  const styles = sheet.getStyleTags();
  const title = 'React Server Side Rendering';
  const html = template({ body, styles, title });
  res.send(html);
});

server.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
