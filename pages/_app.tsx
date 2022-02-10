import 'bootswatch/dist/darkly/bootstrap.min.css';
import '../styles/typography.css';
import '../styles/background.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Background from '../components/Background';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/assets/info.svg" />
      </Head>
      <Background />
      <Container className="mt-5 px-md-5 px-sm-3">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
