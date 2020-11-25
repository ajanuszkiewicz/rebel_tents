import React from "react"
import Layout from "../components/layout"
import Quote from "../components/quote"
import Flickity from 'react-flickity-component'
import "../styles/flickity.css"

import caro1 from "../images/carousel/pitched.jpg"
import caro2 from "../images/carousel/Banner-Image-1.jpg"
import caro3 from "../images/carousel/eventphotos.jpg"

const flickityOptions = {
  initialIndex: 0,
  pageDots: false,
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={caro1}/>
      <img src={caro2}/>
      <img src={caro3}/>
    </Flickity>
  )
}

export default function Home() {
  return (
    <Layout>
      <div className="h-0 invisible mb-8 lg:visible lg:h-auto">
      <Carousel/>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap mb-8 pr-8 pl-8">
        <div className="lg:pr-6 lg:mt-14">
          <h1>Tent Rentals</h1>
          <p>
            Rebel Tents will help make your event a success. We have the tents
            and accessories you need for any party, wedding, or large corporate
            event. We are Eastern Ontario and Western Quebec’s preferred tent
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
        <div className="bg-green-lighter p-8 rounded-lg flex-grow mt-8">
          <h1>Get A Quote</h1>
          <Quote></Quote>
        </div>
      </div>
    </Layout>
  )
}
