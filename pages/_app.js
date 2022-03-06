import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
// Chains ID 4 is Rinkeby network
const supportesChainsIds = [4];
// the "injected" connector is web 3 connection method used by metamask
const connectors = { injected: {} };

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportesChainsIds}
      connectors={connectors}
    >
      <Component {...pageProps} />;
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
