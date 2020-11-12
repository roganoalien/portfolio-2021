import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es, ES">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://unpkg.com/pattern.css"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
