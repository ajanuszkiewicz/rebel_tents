import React from "react"
import {Helmet} from "react-helmet"
import Footer from "../components/footer"
import Navbar from "../components/navbar/navbar"

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-gray text-white">
        <div className="container px-8">
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="">{children}</div>
        <Footer></Footer>
      </div>
    </div>
  )
}
