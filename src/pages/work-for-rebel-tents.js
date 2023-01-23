import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Application from "../components/application"
import Topper from "../components/topper"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

export default function Contact() {
  return (
    <Layout>
      <Topper headerText="Work for Rebel Tents" />
      <div className="container px-8 mb-8">
        <p>
          Looking for a rewarding job where you can work outdoors? Come work for Rebel Tents!
        </p>
      </div>
      <div className="container lg:w-1/2 bg-green-lighter p-8 mb-8 lg:rounded-lg">
        <Application/>
      </div>
    </Layout>
  )
}
