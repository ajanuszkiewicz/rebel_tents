import React, { useRef } from "react"
import { usePlacesWidget } from "react-google-autocomplete"
import ReCAPTCHA from "react-google-recaptcha"

export default function Quote() {
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyD89ypmSI60kgxiOm9gbkYpgWs5-ZfhdP0',
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["geocode"],
      componentRestrictions: { country: "ca" },
    },
  });

  const recaptchaRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const recaptchaResponse = recaptchaRef.current.getValue();
    if (!recaptchaResponse) {
      // Handle the case when reCAPTCHA is not solved
      alert("Please complete the reCAPTCHA verification.");
      return;
    }
  
    // The reCAPTCHA is solved, continue with the form submission.
    const formData = new FormData(event.target); // Get the form data
    formData.append("g-recaptcha-response", recaptchaResponse); // Include the reCAPTCHA response in the form data
  
    try {
      const response = await fetch("https://formspree.io/f/xvovvrne", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        // Handle successful form submission
        alert("Form submitted successfully!");
        document.getElementById("quote").reset(); 
        // You can perform any other actions here, such as redirecting the user to a thank-you page.
      } else {
        // Handle errors if the form submission was not successful
        alert("Form submission failed. Please try again later.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  
  return (
    <div>
      <form id="quote" onSubmit={handleFormSubmit} method="post" action="https://formspree.io/f/xvovvrne">
        <div>
          <label className="block mb-2">
            Name
          </label>
          <input type="text" name="name" id="name" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" required/>
          <small className="text-red-500">* Required</small>
        </div>
        
        <div>
          <label className="block mb-2 pt-8">
            Email
          </label>
          <input type="email" name="email" id="email" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" required/>
          <small className="text-red-500">* Required</small>
        </div>
        
        <div>
          <label className="block mb-2 pt-8">
            Phone
          </label>
          <input type="phone" name="phone" id="phone" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" required/>
          <small className="text-red-500">* Required</small>
        </div>
       
        <div>
          <label className="block mb-2 pt-8">
            Type of Event
          </label>
          <select id="event_type" name="event_type" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" required>
              <option value="Backyard Party">Backyard Party</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Festivals & Fairs">Festivals & Fairs</option>
              <option value="Warehousing & Construction">Warehousing & Construction</option>
              <option value="Winter Event">Winter Event</option>
              <option value="Other">Other</option>
          </select>
          <small className="text-red-500">* Required</small>
        </div>
      
        <div>
          <label className="block mb-2 pt-8">
            Event Date
          </label>
          <input type="date" name="event_date" id="date" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" />
        </div>
        
        <div>
          <label className="block mb-2 pt-8">
            Event Region
          </label>
          <select id="event_location" name="event_location" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" required>
              <option value="Ottawa">Ottawa</option>
              <option value="Perth">Perth</option>
              <option value="Calabogie">Calabogie</option>
              <option value="Pembroke">Pembroke</option>
              <option value="Montreal">Montreal</option>
              <option value="Kingston">Kingston</option>
              <option value="Brockville">Brockville</option>
              <option value="Other">Other</option>
            </select>
            <small className="text-red-500">* Required</small>
        </div>
        <div>
          <label className="block mb-2 pt-8">
            Event Address
          </label>
          <input type="text" name="event_address" id="address" ref={ref} style={{ width: "100%" }} defaultValue="" placeholder="Please enter an address" />
        </div>
        <div>
          <label for="guests" className="block mb-2 pt-8">
            How many guests?
          </label>
          <select id="guests" name="guests" className="w-full rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent" >
              <option value="1-50">1-50</option>
              <option value="51-100">51-100</option>
              <option value="101-150">101-150</option>
              <option value="151-300">151-300</option>
              <option value="301-500">301-500</option>
              <option value="500+">500+</option>
            </select>
        </div>
        <div className='mt-8'>
        <ReCAPTCHA sitekey="6LdHLyMaAAAAAISKt9T7QmV8AE6hrogeUFZDDAuf" ref={recaptchaRef} size="normal" required={true}/>
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
