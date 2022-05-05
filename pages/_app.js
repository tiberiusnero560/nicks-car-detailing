import '../styles/globals.css'
import '../styles/componentStyles.css'
import '../styles/utilities.css'
import '../styles/design_tokens.css'

// The component prop is the active page. So whenever you navigate between routes, 'component' will change to the new page. Therefore, any props you send to the 'component' will be received by the 'page'.

// pageProps is an object with the initial props that were preloaded for your page by one of data fetching methods (SSR, SSG, CSR, Dynamic Routing, ISR). Otherwise it's an empty object.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
