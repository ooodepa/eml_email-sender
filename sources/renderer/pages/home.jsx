import React from 'react';
import Head from 'next/head';

import HomePage from '../components/HomePage/HomePage';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Рассылка e-mail</title>
      </Head>
      <HomePage />
    </React.Fragment>
  );
}

export default Home;
