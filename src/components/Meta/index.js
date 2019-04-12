import Head from 'next/head';

type Props = {
  title: string,
};

export default ({ title }: Props) => (
  <div>
    <Head>
      <title>{`${title} - Paris Recycle`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Bungee|Josefin+Sans"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>
      {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: #333333;
          font-family: 'Josefin Sans', sans-serif;
        }
      `}
    </style>
  </div>
);
