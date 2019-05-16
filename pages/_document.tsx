
import Document, { Head, Main, NextScript } from 'next/document'
import { DocumentContext, DocumentInitialProps, test } from 'next-server/dist/lib/utils';

interface IMyDocumentInitialProps {
  ip: string;
}

export default class MyDocument extends Document<
  IMyDocumentInitialProps & DocumentInitialProps
>  {
  static async getInitialProps(context: DocumentContext) {
    const { req, renderPage } = context;

    const { ip } = req;

    const page = renderPage((App: any) => (props: any) =>
      <App {...props} />
    );
    // Do something with the IP

    return {
      ...page,
      ip,
    };
  }

  render () {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
