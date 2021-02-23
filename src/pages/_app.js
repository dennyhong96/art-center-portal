import Layout from "@/components/layout";
import GlobalStyles from "@/styles/globalStyles";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<GlobalStyles />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
