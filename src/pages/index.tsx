import Head from "next/head";
import {Button} from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trust Mart</title>
        <meta name="description" content="Online store in pakistan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex max-width">
          <div>
            <h1 className="intro-text">
              Discover the best online store in Pakistan
            </h1>
            <h5 className="intro-description">
              At Trust Mart, we are more than just a store; we are your passport
              to a world of quality and variety. Located in the heart of
              Pakistan, Trust Mart is your one-stop destination for the finest
              products from around the globe. Here can find the best online
              product all over the world.
            </h5>
            <Button variant="contained" color="success">Shop Now</Button>
          </div>
          <div>
            <img
              className="intro-image"
              src="https://lezada.dev/landing/assets/images/hero/main.png"
              alt="intro-trust-mart"
            />
          </div>
        </div>
      </main>
    </>
  );
}
