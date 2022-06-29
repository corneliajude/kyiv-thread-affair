import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CatalogPreviews from '../components/homepage/CatalogPreviews';
import ContentBanner from '../components/homepage/ContentBanner';
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
        <section className="content-header mb-5">
          <ContentBanner></ContentBanner>
        </section>

        <section className="content-main">
          <CatalogPreviews></CatalogPreviews>

          <HomeNewsletter></HomeNewsletter>

          <HomeSocial></HomeSocial>

          <HomePayment></HomePayment>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
