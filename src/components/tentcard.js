import React from "react"
import { Link } from "gatsby"

export default function TentCard(props) {
  return (
    <article class="group overflow-hidden rounded-lg shadow-lg hover:bg-green">
      <Link to={"./" + props.cardPage}>
        <img
          alt="Placeholder"
          className="block h-auto w-full group-hover:opacity-90"
          src={props.cardImg}
        />

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <span class="text-lg no-underline hover:underline text-black group-hover:text-white">
            {props.cardTitle}
          </span>
        </header>
      </Link>
    </article>
  )
}
