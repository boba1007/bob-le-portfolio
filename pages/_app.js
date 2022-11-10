import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

const description = "Innovative and proactive Software Engineer capable of developing robust, scalable website and application designs for demanding clients."

function MyApp({ Component, pageProps }) {
  return (
		<Fragment>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link rel='icon' href='img/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'></meta>
				<title>Bob Le - Software Engineer</title>
				<meta name='description' content={description} />
				<meta name='image' content='https://www.onlyboble.com/img/seo.jpeg' />
				<meta name='twitter:title' content="Bob Le - Software Engineer" />
				<meta
					name='twitter:description'
					content={description}
				/>
				<meta name='twitter:image' content='https://www.onlyboble.com/img/seo.jpeg' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta itemProp='name' content="Bob Le - Software Engineer" />
				<meta itemProp='description' content={description} />
				<meta itemProp='image' content='https://www.onlyboble.com/img/seo.jpeg' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content="www.onlyboble.com" />
				<meta property='og:title' content="Bob Le - Software Engineer" />
				<meta
					property='og:description'
					content={description}
				/>
				<meta property='og:image' content='https://www.onlyboble.com/img/seo.jpeg' />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
