import React from "react";
import Link from "next/link";
import Head from "next/head";

// import withAnalytics from "../src/hocs/withAnalytics";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="../static/matrix.jpg" alt="teste" width="200" />

    <h1>Hello</h1>
    <Link href="/users">
      <a>Usuàrios</a>
    </Link>
  </div>
);

export default Home;
// export default withAnalytics()(Home);