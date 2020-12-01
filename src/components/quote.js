import React from "react"

export default function Quote() {
  return (
    <div>
      <form method="post" action="#">
        <div>
          <label className="block mb-2">
            Name
          </label>
          <input type="text" name="name" id="name" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>
        
        <div>
          <label className="block mb-2 pt-8">
            Email
          </label>
          <input type="email" name="email" id="email" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>
        
        <div>
          <label className="block mb-2 pt-8">
            Phone
          </label>
          <input type="email" name="email" id="email" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>
       
        <div>
          <label className="block mb-2 pt-8">
            Type of Event
          </label>
          <select id="cars" name="cars" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent">
              <option value="volvo">Backyard Party</option>
              <option value="saab">Wedding</option>
              <option value="fiat">Corporate Event</option>
              <option value="audi">Festivals & Fairs</option>
              <option value="audi">Warehousing & Construction</option>
              <option value="audi">Winter Event</option>
              <option value="audi">Other</option>
            </select>
        </div>
      
        <div>
          <label className="block mb-2 pt-8">
            Event Date
          </label>
          <input type="date" name="date" id="date" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>
        
        <div>
          <label className="block mb-2 pt-8">
            Event Region
          </label>
          <select id="cars" name="cars" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" >
              <option value="volvo">Ottawa</option>
              <option value="saab">Perth</option>
              <option value="fiat">Calabogie</option>
              <option value="audi">Pembroke</option>
              <option value="audi">Montreal</option>
              <option value="audi">Kingston</option>
              <option value="audi">Brockville</option>
              <option value="audi">Other</option>
            </select>
        </div>
      
        <div>
          <label for="cars" className="block mb-2 pt-8">
            How many guests?
          </label>
          <select id="cars" name="cars" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" >
              <option value="volvo">1-50</option>
              <option value="saab">51-100</option>
              <option value="fiat">101-150</option>
              <option value="audi">151-300</option>
              <option value="audi">301-500</option>
              <option value="audi">500+</option>
            </select>
        </div>
  
        <div className="mt-8">
          <button
            className="rounded-full py-3 px-6 p-4 mr-4 bg-green text-white font-bold"
            type="submit"
          >
            Send
          </button>
          <input
            className="rounded-full py-3 px-6 p-4 bg-green text-white font-bold"
            type="reset"
            value="Clear"
          />
        </div>
      </form>
    </div>
  )
}
