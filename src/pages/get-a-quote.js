import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Quote from "../components/quote"
import Topper from "../components/topper"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

export default function Contact() {
  return (
    <Layout>
      <Topper headerText="Get A Quote" />
      <div className="container px-8 mb-8">
        <p>
          Have a special event coming up, and need help planning your rentals?
          For personalized service and assistance, use the contact form below,
          email us, or kick it old school and give us a call.
        </p>
      </div>
      <div className="container lg:w-1/2 bg-green-lighter p-8 lg:rounded-lg">
        <Quote />
      </div>
      <div className="container grid lg:grid-cols-2 mb-8 p-8">
        <div>
          <h2>Contact Us</h2>
          <p>Feel free to give us a call with any questions. We can be reached at 1-613-821-3131. We’re open from 9 a.m. – 6 p.m. Monday to Saturday.</p>
          <p>If there’s an emergency text Kiera at 613-552-5003.</p>
        </div>
        <div>
          <h2>Social Media</h2>
          <p className="mb-4">We embrace all things digital. Like us on Facebook and follow us on Twitter to receive the latest Rebel Tents news and promotions. We even post the odd picture so you can see what life is like at Rebel Tents (we keep the post-work-beer, and barefoot photos for ourselves though).</p>
          <div className="text-center order-3 lg:text-left lg:w-1/3 lg:order-3">
            <a
              href="https://www.facebook.com/RebelTents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="text-green hover:text-green"
                size="3x"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
