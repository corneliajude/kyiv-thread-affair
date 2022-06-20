import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thead Affair</title>
      </Head>

      <header className="header mt-5 text-warning">
        Hello
        <img src="/images/logo.jpg" alt=""></img>
        <i className="fa-solid fa-phone"></i>
      </header>

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
