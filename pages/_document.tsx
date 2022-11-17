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
      <Html lang="en">
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
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
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
