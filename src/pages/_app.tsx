import { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';

console.log(Amplify);


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
