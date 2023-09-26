"use client"

import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

export default function CrewDetails({ data }: { data: Crew[] }) {
  const [selectedCrew, setSelectedCrew] = useState(data[0].name.toLowerCase())
  const [isLoading, setIsLoading] = useState(true)

  const crewData = data.find((crewData) => crewData.name.toLowerCase() === selectedCrew)

  if (!crewData) {
    throw new Error("Crew not found")
  }

  const handleCrewChange = (crewName: string) => {
    setIsLoading(true)
    setSelectedCrew(crewName)
  }

  const handleOnImageLoad = () => {
    setIsLoading(false)
  }

  const renderCrewButtons = data.map((crew) => {
    const isActive = crew.name.toLowerCase() === selectedCrew

    return (
      <button
        type="button"
        onClick={() => handleCrewChange(crew.name.toLowerCase())}
        key={crew.name}
        className={clsx(
          "h-4 w-4 select-none rounded-full bg-gray-light-1/25 pb-2 transition-[background-color] duration-200 ease-out",
          isActive && "bg-white"
        )}
        aria-label={crew.name.toLowerCase()}
      />
    )
  })

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={crewData.name}
        className={clsx(
          "mt-12 shrink-0 text-center transition-opacity md:order-2 lg:order-none lg:row-span-2 lg:mt-0 lg:h-full lg:self-end"
        )}
      >
        <Image
          className="h-48 w-auto md:h-80 lg:h-full lg:max-h-[640px]"
          src={crewData.images.webp}
          alt={crewData.name}
          width={433}
          height={640}
          quality={100}
          priority={true}
          onLoad={handleOnImageLoad}
        />
      </motion.div>

      <div className="flex flex-col items-center lg:items-start lg:text-start ">
        <div className="h-1 w-full -scale-y-[25%] bg-gray-light-1/25 md:hidden" />
        <ul className="mt-4 flex gap-4 uppercase tracking-widest md:order-1 lg:mt-8 lg:pb-8 ">
          {renderCrewButtons}
        </ul>
        <span className="mt-8  font-bellefair uppercase text-gray-light-1/50 lg:mt-0">
          {crewData.role}
        </span>
        <h1 className="font-bellefair text-h4 uppercase lg:text-h3">{crewData.name}</h1>
        <p className="mt-8 leading-6 tracking-widest text-gray-light-1 [text-wrap:balance]  md:max-w-[90ch] lg:max-w-[55ch]">
          {crewData.bio}
        </p>
      </div>
    </>
  )
}

interface Crew {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}
