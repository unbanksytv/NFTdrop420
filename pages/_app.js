import "../css/globals.css";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
const sdk = new ThirdwebSDK("mumbai");
const contract = await sdk.getContract("0xC2EE88094f99663Dd14d48449cF2C7ec16A318A7");

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebSDK>
      <Component {...pageProps} />
    </ThirdwebSDK>
  )
}

export default MyApp
