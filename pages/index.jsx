import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thead Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <div className="badge">20off</div>
        <div className="badge badge-secondary">new entry</div>
        <div className="badge badge-oversized">%</div>

        <div>
          <a href="/" className="button">
            Test button
          </a>
          <button className="button">Test button</button>

          <a href="/" className="button button-large">
            Test button
          </a>
          <button className="button button-large">Test button</button>
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
