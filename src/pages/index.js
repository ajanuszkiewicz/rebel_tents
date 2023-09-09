import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Quote from "../components/quote"

import car1 from "../images/carousel/1.jpg"
import car2 from "../images/carousel/2.jpg"
import car3 from "../images/carousel/3.jpg"
import car4 from "../images/carousel/4.jpg"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Rebel Tents - Tent rentals in Ottawa and the surrounding area
        </title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <meta
          name="description"
          content="Rebel Tents has tents for all occasions like weddings, corporate events, winter events, and more."
        />
      </Helmet>
      <div className="h-0 flex justify-center items-center invisible mb-8 lg:visible lg:h-auto bg-gray-lighter">
        <img src={car1} className="-mb-0" />
      </div>
      <div className="container flex flex-wrap lg:flex-nowrap mb-8 px-8">
        <div className="lg:pr-6 lg:mt-16 flex-initial">
          <h1 className="mb-8">Tent Rentals</h1>
          <p>
            Rebel Tents will help make your event a success. We have the tents
            and accessories you need for any party, wedding, or large corporate
            event. We are Eastern Ontario's preferred tent
            rental provider because we love what we do, and it shows in our
            work.
          </p>
          <h2>Wedding & Event Tents</h2>
          <p>
            First and foremost, Rebel Tents provides tents for your special
            occasions. Any size, from 10×10’s, to elegant wedding tents, pitched
            with precision. Sidewalls, dance floors, lighting, and liners are
            available to take your tent and event to the next level.
          </p>
          <h2>Corporate & Warehousing</h2>
          <p>
            Be it a company picnic, golf tournament, or parking lot tent sale,
            our tents can help your company display its grandness and success
            with elegance and awe.
          </p>
          <p>
            We can also cover just about any worksite that needs to be sheltered
            from the elements. Clearspan fabric structures can reach over 100
            feet wide and extend over 400 feet.
          </p>
          <h2>Party Rentals</h2>
          <p>
            Meet + eat + relax is a great formula for any party, so we’ve got
            you covered (literally). We have everything from flooring, lighting,
            interior draping, tent liners, pole covers, fans, heating and
            cooling systems. We pride ourselves on being first and foremost a
            tent rental company, so our ancillary services are only available
            with the rental of one or more tents.
          </p>
          <h2>Community Involvement</h2>
          <p>
            We believe in doing our part to build a strong community, and that
            means getting involved. Rebel Tents has supported many local
            charities and organizations, and are always willing to lend a
            helping hand. Please contact us for details.
          </p>
        </div>
        <div className="bg-green-lighter p-8 rounded-lg mt-8 flex-grow lg:flex-shrink-0">
          <h1 className="mb-8 text-center">Get A Quote</h1>
          <Quote></Quote>
        </div>
      </div>
    </Layout>
  )
}
