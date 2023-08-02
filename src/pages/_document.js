import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Font Awesome */}
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
            integrity='sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />
          <link rel="icon" href="/HookerHill.jpg" />
          {/* Open Graph Meta Tags */}
          <meta property="og:url" content="http://about-mycard.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="About My Card" />
          <meta property="og:description" content="Create and Share digital business cards." />
          <meta property="og:image" content="https://about-mycard.vercel.app/Preview.png" />

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
