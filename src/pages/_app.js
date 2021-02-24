import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/globalStyles";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<GlobalStyles />
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
