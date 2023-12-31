//import 'tailwindcss/tailwind.css'
import '../styles/index.css'

interface Props {
  // any props that come into the component
  Component: any
  pageProps: any
}


export default function MyApp({ Component, pageProps }:Props) {
  return <Component {...pageProps} />
}
