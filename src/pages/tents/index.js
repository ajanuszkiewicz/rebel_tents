import React from "react"
import { Link } from "gatsby"
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
      <Layout>
        <Topper headerText="Tent Rentals" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <p>Backyard parties come in all different shapes and sizes.</p>
            <p>
              If you weren’t able to keep it small and simple (word got out?!),
              no problem! we have tents in every size. 10 people, 50 people, 500
              people, we can cover them all.
            </p>
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
