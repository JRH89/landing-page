import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-n8j2AIVW+xjS26+X4jIHxOcIuV3huzH1pyoytNvWt9wyWlguorHvj4l7u0Eqh7JcPRU5kT7B/GHz/axzIEhSg=="
            crossOrigin="anonymous"
          />

          {/* Open Graph Meta Tags */}
          <meta property="og:url" content="http://about-mycard.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="About My Card" />
          <meta property="og:description" content="Create and Share digital business cards." />
          <meta property="og:image" content="/Preview.png" />

          {/* Add other meta tags as needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
