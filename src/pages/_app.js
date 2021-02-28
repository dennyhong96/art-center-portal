import Layout from "@/components/layout";
import useMobileViewport from "@/hooks/useMobileViewport";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }) {
	useMobileViewport();
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
