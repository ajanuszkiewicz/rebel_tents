import React from "react"
import Layout from "../../components/layout"
import Topper from "../../components/topper"
import CallToAction from "../../components/cta"
import TentCard from "../../components/tentcard"

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
          <TentCard cardTitle="Backyard Parties"/>
          <TentCard cardTitle="Weddings"/>
          <TentCard cardTitle="Corporate Parties"/>
          </div>
        </div>
        <CallToAction />
      </Layout>
    </div>
  )
}
