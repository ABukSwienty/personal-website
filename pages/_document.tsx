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
            content="Freelancer, web-development, resume, personal"
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
