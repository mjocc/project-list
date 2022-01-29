import 'bootswatch/dist/darkly/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/info.svg" />
      </Head>
      <Container className="mt-5 px-5">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
