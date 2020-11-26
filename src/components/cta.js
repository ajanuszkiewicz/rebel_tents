import React from "react"

export default function CallToAction(props) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-lighter p-8">
      <div className="font-bold text-2xl text-center flex justify-center mb-8">
        Don't expose yourself to the elements, rent a tent for your event today!
      </div>
      <div className="text-center w-48 rounded-full py-3 px-6 p-4 bg-green text-white font-bold">
        Get A Quote
      </div>
    </div>
  )
}
