import React from "react"
import assoc from "../images/rebel-assoc.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faLeaf)


export default function Footer() {
  return (
    <div className="bg-gray text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container p-8">
        <div>
          <h3 className="text-lg mb-4 border-b-2 border-gray-600 pb-4">
            Service Areas
          </h3>
          <p>
            We proudly serve a majority of Eastern Ontario.
          </p>
          <p className="pt-4">
            Reach out to us and we'll let you know if we can reach your event!
          </p>
        </div>
        <div>
          <h3 className="text-lg mb-4 border-b-2 border-gray-600 pb-4">
            Rentals
          </h3>
          <ul className="list-inside fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/tents/backyard-parties" className="hover:underline">Backyard Parties</Link>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/tents/weddings" className="hover:underline">Weddings</Link>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/tents/festivals-and-fairs" className="hover:underline">Festivals & Fairs</Link>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/tents/corporate-events" className="hover:underline">Corporate Events</Link>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/tents/warehousing-and-construction" className="hover:underline">Warehousing & Construction</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-4 border-b-2 border-gray-600 pb-4">
            About Rebel
          </h3>
          <ul className="list-inside fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/about-us" className="hover:underline">About Us</Link>
            </li>
            {/* <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              Community
            </li> */}
                        <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/work-for-rebel-tents" className="hover:underline">
              Work for Rebel Tents
              </Link>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon="leaf" className="text-green" />
              </span>
              <Link to="/get-a-quote" className="hover:underline">
              Get A Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-4 border-b-2 border-gray-600 pb-4">
            Contact Us
          </h3>
          <p>
            The best way to get started with a tent rental is by filling out and
            submitting a quote request from this website. It'll give us the
            information we need to know before we have a friendly chat on the
            phone.
          </p>
          <p className="pt-4">
            If you really need to get a hold of us you can reach us at:
          </p>
          <p className="pt-4">
            phone:{" "}
            <a href="tel:1-613-821-3131" className="text-green">
              1-613-821-3131
            </a>
          </p>
          <p className="pt-4">
            email:{" "}
            <a href="mailto:info@rebeltents.com" className="text-green">
              info@rebeltents.com
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-darker text-sm">
        <div className="container flex flex-col p-8 lg:flex-row">
          <div className="order-2 text-center lg:w-1/3 lg:text-left lg:order-1">
            <p>
              Rebel Tents is a proud member of the Canadian Rental Association
              and American Rental Association.
            </p>
            <div className="flex justify-center lg:justify-start pb-8">
              <img
                src={assoc}
                alt="Rebel Tents is a CRA and ARA memeber."
                className="w-48 mt-4"
              />
            </div>
          </div>
          <div className="order-1 pb-8 text-center lg:w-1/3 lg:order-2">
            <p>© 2016, Rebel Tents. All rights reserved.</p>
          </div>
          <div className="text-center order-3 lg:text-right lg:w-1/3 lg:order-3">
            <a
              href="https://www.facebook.com/RebelTents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="text-white hover:text-green"
                size="3x"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
