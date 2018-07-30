export default ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`;
