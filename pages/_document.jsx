import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <meta property="og:title" content="Home" />
          <meta property="og:description" content="Hop-On the Next.bus" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://card-components-lib.vercel.app/" />
          <meta property="og:image" content="https://imgasset.s3.ca-central-1.amazonaws.com/card--com--og.png" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
