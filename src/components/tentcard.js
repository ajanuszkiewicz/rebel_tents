import React from "react"

export default function TentCard(props) {
  return (
<article class="overflow-hidden rounded-lg shadow-lg">
              <a href="./backyard-parties">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-black"
                    href="./backyard-parties"
                  >
                    {props.cardTitle}
                  </a>
                </h1>
              </header>
            </article>
  )
}
