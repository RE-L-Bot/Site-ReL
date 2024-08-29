import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

	return (

		<Html>

			<Head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
				<link rel="icon" href="/svgs/RELCHIBI.svg" type="image/x-icon" />
			</Head>

			<body>

				<Main />

				<NextScript />

				<Script src="/discord-components.config.js" strategy="beforeInteractive" />

			</body>

		</Html>

	)

}