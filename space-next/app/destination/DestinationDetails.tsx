"use client"

import Cookies from "js-cookie"
import clsx from "clsx"
import Image from "next/image"
import { DestinationDetailItem } from "@/components/destination/DestinationDetailItem"
import { useState } from "react"

export default function DestinationDetails({
  data,
  destination: cookieSavedDestination,
}: DestinationDetailsProps) {
  const [selectedDestination, setSelectedDestination] = useState(cookieSavedDestination)

  const destinationData = data.find(
    (destinationData) => destinationData.name.toLowerCase() === selectedDestination
  )

  if (!destinationData) {
    throw new Error(`Destination ${selectedDestination} not found`)
  }

  const handleDestinationChange = (destinationName: string) => {
    if (destinationName === selectedDestination) {
      return
    }

    Cookies.set("destination", destinationName)
    setSelectedDestination(destinationName)
  }

  const renderDestinationButtons = data.map((destination) => {
    const isActive = destination.name.toLowerCase() === selectedDestination
    return (
      <button
        type="button"
        onClick={() => handleDestinationChange(destination.name.toLowerCase())}
        key={destination.name}
        className={clsx(
          "border-b-4 border-transparent pb-2 uppercase tracking-widest text-gray-light-1",
          {
            "border-white text-white": isActive,
          }
        )}
      >
        {destination.name.toLowerCase()}
      </button>
    )
  })

  return (
    <>
      <Image
        className="mt-6"
        src={destinationData.images.webp}
        alt={destinationData.name}
        width={475}
        height={475}
        quality={75}
        priority={true}
      />
      <ul className="mt-8 flex gap-4 uppercase  tracking-widest">
        {renderDestinationButtons}
      </ul>
      <h1 className="mt-8 font-bellefair text-h3 uppercase">{destinationData.name}</h1>
      <p className="text-center leading-6 tracking-wider">
        {destinationData.description}
      </p>
      <div className="mt-8 w-full scale-y-[10%] border border-gray-light-1/20" />
      <div className="flex flex-col gap-2">
        <DestinationDetailItem label="avg.distance" value={destinationData.distance} />
        <DestinationDetailItem label="est. travel time" value={destinationData.travel} />
      </div>
    </>
  )
}

type DestinationDetailsProps = {
  destination: string
  data: Destination[]
}

type Destination = {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}
