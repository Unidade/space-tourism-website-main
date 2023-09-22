"use client"

import { useLocalStorage } from "@/utils/window-storage"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

export default function CrewDetails({ data }: { data: Crew[] }) {
  const [selectedCrew, setSelectedCrew] = useState(data[0].name.toLowerCase())

  const crewData = data.find((crewData) => crewData.name.toLowerCase() === selectedCrew)

  if (!crewData) {
    throw new Error("Crew not found")
  }

  const handleCrewChange = (crewName: string) => {
    setSelectedCrew(crewName)
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
      ></button>
    )
  })

  return (
    <>
      <div className="shrink-5 mt-12">
        <Image
          className="h-48 w-auto "
          src={crewData.images.webp}
          alt={crewData.name}
          width={475}
          height={475}
          quality={75}
          priority={true}
        />
      </div>
      <div className="h-1 w-full -scale-y-[25%] bg-gray-light-1/25" />
      <ul className="mt-4 flex gap-4 uppercase  tracking-widest">{renderCrewButtons}</ul>
      <span className="mt-8 font-bellefair uppercase text-gray-light-1/50">
        {crewData.role}
      </span>
      <h1 className=" font-bellefair text-h4 uppercase">{crewData.name}</h1>
      <p className="mt-8 text-center leading-6 tracking-widest text-gray-light-1">
        {crewData.bio}
      </p>
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
