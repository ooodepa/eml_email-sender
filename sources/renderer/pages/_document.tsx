import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="ru"
        style={{
          height: '100%',
        }}>
        <Head></Head>
        <body
          style={{
            height: '100%',
            margin: 0,
          }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
