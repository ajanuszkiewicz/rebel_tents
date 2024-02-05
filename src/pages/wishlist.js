import React from "react"
import Layout from "../components/layout"
import Topper from "../components/topper"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Layout>
        <Helmet>
          <title>Event Wishlist | Rebel Tents</title>
          <meta
            name="description"
            content="Build a wishlist for your next event."
          />
        </Helmet>
        <Topper headerText="Event Wishlist" />
        <div className="container mb-8 pr-8 pl-8">
          <p>
            Use the tool below if you're looking for something specific to make
            your event special, or if you want to see what kinds of rentals are
            available from Rebel Tents.
          </p>
          <p>
            In a rush? Get a quick quote from our{" "}
            <Link to="/get-a-quote">quotes page</Link>.
          </p>
          <gspro-item-gallery></gspro-item-gallery>
        </div>
      </Layout>
    </div>
  )
}

// export function Head() {
//   return (
// <>
// <script type="module" src="https://unpkg.com/@goodshuffle/gspro-wc@0.5.6/dist/gspro-wc/gspro-wc.esm.js"></script>
//         <script nomodule="" src="https://unpkg.com/@goodshuffle/gspro-wc@0.5.6/dist/gspro-wc/gspro-wc.js"></script>
//         <gspro-wishlist-config
// data-url="https://data.goodshuffle.com/vendor/ZSLncVtdvLKr4REqp6mmM7WmiII6JTY"
// ></gspro-wishlist-config>

//         </>

//   )
// }

export const onClientEntry = () => {
  // Load scripts and initialize gspro-wishlist-config here
  ;<>
    <script
      type="module"
      src="https://unpkg.com/@goodshuffle/gspro-wc@0.5.6/dist/gspro-wc/gspro-wc.esm.js"
    ></script>
    <script
      nomodule=""
      src="https://unpkg.com/@goodshuffle/gspro-wc@0.5.6/dist/gspro-wc/gspro-wc.js"
    ></script>
    <script>
      {`
          document.addEventListener('DOMContentLoaded', function() {
            var wishlistConfig = document.createElement('gspro-wishlist-config');
            wishlistConfig.setAttribute('data-url', 'https://data.goodshuffle.com/vendor/ZSLncVtdvLKr4REqp6mmM7WmiII6JTY');
            document.body.appendChild(wishlistConfig);
          });
        `}
    </script>
  </>
}
