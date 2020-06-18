import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

// import withAnalytics from "../src/hocs/withAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/matrix.jpg" alt="teste" width="200" />

    <Title>Hello</Title>
    <Link href="/users">
      <a>Usuàrios</a>
    </Link>
  </div>
);

export default Home;
// export default withAnalytics()(Home);