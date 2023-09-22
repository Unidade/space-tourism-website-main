"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

export default function TechnologyDetails({ data }: { data: Technology[] }) {
  const [selectedTechnologyIdx, setSelectedTechnologyIdx] = useState(0)

  const technologyData = data[selectedTechnologyIdx]

  const handleCrewChange = (technologyIdx: number) => {
    setSelectedTechnologyIdx(technologyIdx)
  }

  const renderTechnologyButtons = data.map((technology, idx) => {
    const isActive = idx === selectedTechnologyIdx

    return (
      <button
        type="button"
        onClick={() => handleCrewChange(idx)}
        key={technology.name}
        className={clsx(
          "h-10 w-10 select-none rounded-full bg-transparent text-gray-light-1 outline outline-1 transition-colors duration-200 ease-out",
          isActive && "bg-white text-[#0f0f0f]"
        )}
        aria-label={technology.name.toLowerCase()}
      >
        {String(idx + 1)}
      </button>
    )
  })

  return (
    <>
      <div className="mt-12">
        <Image
          src={technologyData.images.landscape}
          alt={technologyData.name}
          width={475}
          height={475}
          quality={75}
          priority={true}
        />
      </div>
      <ul className="mt-4 flex gap-4 uppercase  tracking-widest">
        {renderTechnologyButtons}
      </ul>
      <span className="mt-8 font-bellefair uppercase text-gray-light-1/50">
        the terminology...
      </span>
      <h1 className=" font-bellefair text-h4 uppercase">{technologyData.name}</h1>
      <p className="mt-8 text-center leading-6 tracking-widest text-gray-light-1">
        {technologyData.description}
      </p>
    </>
  )
}

interface Technology {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}
