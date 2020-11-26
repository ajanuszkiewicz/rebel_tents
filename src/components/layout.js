import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="">
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}