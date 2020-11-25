import React from "react"
import Layout from "../components/layout"
import PhotoGallery from "../components/gallery"

export default function Home() {
  return (
    <Layout>
      <div className="h-0 invisible mb-8 lg:visible lg:h-auto">
      </div>
      <div className="mb-8 pr-8 pl-8">
        <div className="lg:pr-6 lg:mt-0">
          <div className="font-bold">
              <h1>Party Rentals</h1>
          </div>
          <p>
          Meet + eat + relax is a great formula for any party, so we’ve got you covered (literally). We have everything from flooring, lighting, interior draping, tent liners, pole covers, fans, heating and cooling systems.
          </p>
          <p>
          So what don’t we do? Well… we are first and foremost a tent rental company, so our ancillary services are only available with the rental of one or more tents. Though we don’t mind if it’s a big tent or a small tent.
          </p>
        </div>
        <div className="mt-8">
            <PhotoGallery/>
        </div>
      </div>
    </Layout>
  )
}