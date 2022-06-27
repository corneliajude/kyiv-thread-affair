import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeNewsletter from '../components/homepage/HomeNewsletter';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thead Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <HomeNewsletter></HomeNewsletter>

        <HomeSocial></HomeSocial>

        <HomePayment></HomePayment>
      </main>

      <Footer></Footer>
    </div>
  );
}
