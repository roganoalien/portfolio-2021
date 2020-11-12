import Layout from '../layout/Layout';
import '../styles/index.css';
import '../styles/_global.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		// <Layout key={`${router.route}`}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
