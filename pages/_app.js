import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
