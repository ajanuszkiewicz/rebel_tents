import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Topper from "../../components/topper"
import CallToAction from "../../components/cta"
import TentCard from "../../components/tentcard"
import PartyImg from "../../images/tents/1.jpg"
import WeddingImg from "../../images/tents/2.jpg"
import CorpImg from "../../images/tents/3.jpg"
import FairImg from "../../images/tents/4.jpg"
import WarehouseImg from "../../images/tents/5.jpg"
import WinterImg from "../../images/tents/6.jpg"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rebel Tents - Tent rentals for all occasions</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        <meta
          name="description"
          content="Rebel Tents has tents for all occasions like weddings, corporate events, winter events, and more."
        />
      </Helmet>
      <Layout>
        <Topper headerText="Tent Rentals" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <p>Big or small, we have tents and accessories available for all occasions.</p>
            <p>Can't find your event on this list? That's OK! We can help make any event or occasion a success.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-8">
            <TentCard
              cardTitle="Backyard Parties"
              cardImg={PartyImg}
              cardPage="backyard-parties"
            />
            <TentCard
              cardTitle="Weddings"
              cardPage="weddings"
              cardImg={WeddingImg}
            />
            <TentCard
              cardTitle="Corporate Events"
              cardPage="corporate-events"
              cardImg={CorpImg}
            />
            <TentCard
              cardTitle="Festivals & Fairs"
              cardPage="festivals-and-fairs"
              cardImg={FairImg}
            />
            <TentCard
              cardTitle="Warehousing & Construction"
              cardPage="warehousing-and-construction"
              cardImg={WarehouseImg}
            />
            <TentCard
              cardTitle="Winter Tents"
              cardPage="winter-tents"
              cardImg={WinterImg}
            />
          </div>
        </div>
        <CallToAction />
      </Layout>
    </div>
  )
}
