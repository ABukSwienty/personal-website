import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Alexander-Buk-Swienty's personal website"
          />
          <meta
            name="keywords"
            content="freelancer, web-development, resume, personal, buk-swienty"
          />
          <meta name="author" content="Alexander Buk-Swienty" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Arsenal:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
          />
        </Head>
        <body className="overflow-x-hidden bg-indigo-50 font-sans transition-colors duration-300 ease-in-out">
          <div id="overlay" className="relative z-50"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
