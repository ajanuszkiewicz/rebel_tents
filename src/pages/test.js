import React from "react"
import Layout from "../components/layout"
import Topper from "../components/topper"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Layout>
        <Helmet>
        <script type="module" src="https://unpkg.com/@goodshuffle/gspro-wc@0.5.6/dist/gspro-wc/gspro-wc.esm.js"></script>
        <script nomodule="" src="https://unpkg.com/@goodshuffle/gspro-wc@0.5.6/dist/gspro-wc/gspro-wc.js"></script>
        <script>
            {`
              document.addEventListener("DOMContentLoaded", function() {
                const gsproWishlistConfig = document.createElement("gspro-wishlist-config");
                gsproWishlistConfig.setAttribute("data-url", "https://data.goodshuffle.com/vendor/ZSLncVtdvLKr4REqp6mmM7WmiII6JT");
                document.head.appendChild(gsproWishlistConfig);
              });
            `}
          </script>
        </Helmet>
        <Topper headerText="Testing Page" />
        <div className="container mb-8 pr-8 pl-8">

        <gspro-item-gallery></gspro-item-gallery>
        </div>
      </Layout>
    </div>
  )
}

