import React from "react"
import Layout from "../components/layout"
import Topper from "../components/topper"
import CallToAction from "../components/cta"
import Card from "../components/card"
import JerImg from "../images/headshots/jer_mug.jpg"
import KieraImg from "../images/headshots/kiera_mug.jpg"
import OliImg from "../images/headshots/oli_mug.jpg"
import MikeImg from "../images/headshots/mike_mug.jpg"

export default function Home() {
  return (
    <div>
      <Layout>
        <Topper headerText="About Us" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <h2>OUR COMMITMENT TO YOU</h2>
            <p>
              Rebel Tents & Event Rentals is dedicated to providing you with
              superior service and the best product selection to fit every
              budget. Our event specialists have managed thousands of events,
              ranging from intimate backyard gatherings to large corporate
              functions; no event is too large or too small. We are deeply
              committed to making you look great, are meticulous about
              maintaining an inventory with an infinite selection of unique
              items for those final touches, and bringing more style and
              sophistication to your table. We look forward to helping you
              create memorable moments that will live on long after the final
              guest has left.
            </p>
            <h2>VISION STATEMENT</h2>
            <p>
              Rebel Tents & Event Rental’s vision is to be the leading tent
              rental company in the region and to create the most customer
              oriented tent rental company.
            </p>
            <h2>MISSION STATEMENT</h2>
            <p>
              Our mission at Rebel Tents & Event Rentals is to provide our
              customers with products and services of the finest quality at a
              competitive price accompanied by unsurpassed customer service. To
              operate a profitable rental company in a way that benefits our
              clients, employees and our planet.
            </p>
            <h2>VALUES</h2>
            <ul className="list-disc list-inside">
              <li>Customer Satisfaction</li>
              <li>Quality Products</li>
              <li>Product Selection</li>
              <li>Innovation</li>
              <li>Ability to Fit Any Size Event</li>
              <li>Event and Product Knowledge</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <Card
              cardImg={JerImg}
              cardText="An entrepreneur by nature, Rebel Tents is Jeremy’s pride and joy. Jer’s background in all things party-and-banquet gives him the expertise to keep an eye on all moving parts and make sure everything goes off without a hitch (okay, maybe we’ll need the hitch for the truck)."
            />
            <Card
              cardImg={KieraImg}
              cardText="Kiera is the lovely voice you hear on the phone, the one answering emails at all hours, and the one who coordinates everything behind the scenes."
            />
            {/* <Card cardImg={OliImg} cardText="Kiera and Jer’s right-hand-man, Oliver was born to work at Rebel Tents (kidding?). When this kid has his work boots and gloves on, watch out! He’s bound to start helping out and hauling things around."/> */}
            <Card cardImg={MikeImg} cardText="As a contractor, electrician, and perfectionist, Mike is the guy you want around when you have a vision but can’t quite get everything in line. Mike’s also the guy who will help get past any obstacles at not-quite-level venues."/>
          </div>
        </div>
        <CallToAction />
      </Layout>
    </div>
  )
}
