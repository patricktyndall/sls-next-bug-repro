import App from 'next/app';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return {
		testProp: '1',
		...appProps,
	};
  };

export default MyApp;