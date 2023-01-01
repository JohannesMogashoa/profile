import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';
import Head from 'next/head';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Personal Site | Johannes Mogashoa</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
