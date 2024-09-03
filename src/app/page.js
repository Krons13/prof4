import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Form from '../../components/Form/Form';
import TypesInsurance from '../../components/TypesInsurance/TypesInsurance';
import Services from '../../components/Services/Services';
import Faq from '../../components/FAQ/Faq';
import AboutUs from '../../components/AboutUs/AboutUs';
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <Header />
      <Main />
      <TypesInsurance />
      <Services />
      <Faq />
      <Form />
      <AboutUs />
    </div>
  )
}
