import Image from "next/image";
import Script from "./components/Navbar";

export default function Home() {
  return (
    <>
    <h1>
    <Script src="components/navbar.js" strategy="afterInteractive" />
    </h1>
    </>
  );
}
