import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import "../styles/styles.css"

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <meta charSet='UTF-8'></meta>
      <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      <link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
    <div className='container'>
      <Component {...pageProps} />
    </div>
  </div>
}

export default MyApp
