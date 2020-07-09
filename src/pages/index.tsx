import Head from 'next/head';
import React from 'react';

import {
  Copy,
  Heading,
  Subheading,
  Subtitle,
  Title,
} from 'shared/components/Typography';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>ALGEBRAIC AS FUCK</title>
      </Head>

      <main>
        <Title>ALGEBRAIC AS FUCK</Title>
        <Subtitle>ALGEBRAIC AS FUCK</Subtitle>
        <Heading>ALGEBRAIC AS FUCK</Heading>
        <Subheading>ALGEBRAIC AS FUCK</Subheading>
        <Copy>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          aliquam temporibus numquam excepturi perspiciatis, minus voluptates
          repudiandae. Odio, dolor voluptatem quia reiciendis amet id, culpa qui
          nobis nihil dolores quo!
        </Copy>
      </main>
    </>
  );
};

export default Home;
