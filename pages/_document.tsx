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
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
          />
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </Head>
        <body
          className="overflow-x-hidden bg-stone-200 font-vietnam antialiased transition-colors duration-300 ease-in-out"
          style={{
            overscrollBehavior: "none",
          }}
        >
          <div id="overlay" className="relative"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
