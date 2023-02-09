import React from "react"

export default function Quote() {
  return (
    <div>
      <form
  action="https://formspree.io/f/xpzewend"
  method="POST"
  enctype="multipart/form-data"
>
        <div>
          <label className="block mb-2">
            Full Name
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
          <input type="phone" name="phone" id="phone" placeholder="(###) ###-####" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>
      
        <div>
          <label className="block mb-2 pt-8">
            Date of Availability
          </label>
          <input type="date" name="event_date" id="date" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>

        <div>
          <label className="block mb-2 pt-8">
            Optional Message
          </label>
          <textarea name="message" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"></textarea>
        </div>

        <div>
          <label className="block mb-2 pt-8">
            Upload Resume
          </label>
          <input type="file" name="upload"/>
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
