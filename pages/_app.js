/* eslint-disable no-unused-vars */
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import '../styles/pages/index.scss';
import '../styles/pages/items.scss';
import '../styles/pages/detail.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
