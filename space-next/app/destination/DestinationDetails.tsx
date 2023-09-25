"use client"

import Cookies from "js-cookie"
import clsx from "clsx"
import Image from "next/image"
import { DestinationDetailItem } from "@/components/destination/DestinationDetailItem"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  const DestinationButton = data.map((destination) => {
    const isActive = destination.name.toLowerCase() === selectedDestination
    return (
      <button
        type="button"
        onClick={() => handleDestinationChange(destination.name.toLowerCase())}
        key={destination.name}
        className={clsx(
          "relative border-b-4 border-transparent pb-2 uppercase tracking-widest text-gray-light-1 transition-all"
        )}
      >
        {destination.name.toLowerCase()}
        {isActive && (
          <motion.div
            className="absolute bottom-[-1px] left-0 right-0 h-1 bg-white"
            layoutId="underline"
          />
        )}
      </button>
    )
  })

  return (
    <>
      <AnimatePresence mode="sync">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, type: "just" }}
            key={destinationData.name}
          >
            <Image
              className="mt-6"
              src={destinationData.images.webp}
              alt={destinationData.name}
              width={445}
              height={445}
              quality={75}
              priority={true}
            />
          </motion.div>
        </div>
        <ul className="mt-8 flex gap-4 uppercase  tracking-widest">
          {DestinationButton}
        </ul>
      </AnimatePresence>

      <div className="max-w-md text-center">
        <h1 className="mt-8 font-bellefair text-h3 uppercase">{destinationData.name}</h1>
        <p className=" text-balance text-center leading-6 tracking-wider">
          {destinationData.description}
        </p>
        <div className="mt-8 w-full scale-y-[10%] border border-gray-light-1/20" />
        <div className="flex flex-col gap-2">
          <DestinationDetailItem label="avg.distance" value={destinationData.distance} />
          <DestinationDetailItem
            label="est. travel time"
            value={destinationData.travel}
          />
        </div>
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
