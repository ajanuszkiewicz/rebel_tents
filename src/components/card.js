import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)

export default function Card(props) {
  return (
    <article class="overflow-hidden rounded-lg shadow-lg">
        <img
          alt="Placeholder"
        className="block h-auto w-full"
          src={props.cardImg}
        />

      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <span class="">
        {props.cardText}
        </span>
      </header>
      {/* <FontAwesomeIcon
        icon={["fab", "linkedin-in"]}
        className="text-xl text-gray-300 m-2"
      /> */}
    </article>
)
  }