"use client"

import clsx from "clsx"
import Image from "next/image"
import { useRef, useState } from "react"

export default function TechnologyDetails({ data }: { data: Technology[] }) {
  const [selectedTechnologyIdx, setSelectedTechnologyIdx] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const technologyData = data[selectedTechnologyIdx]

  const handleCrewChange = (technologyIdx: number) => {
    setSelectedTechnologyIdx(technologyIdx)
    setIsLoading(true)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      <div
        className={clsx(
          "duration-250 relative w-full transition-opacity ease-out",
          isLoading && "animate-pulse blur"
        )}
      >
        <Image
          className="mt-12 w-full lg:hidden"
          src={technologyData.images.landscape}
          alt={technologyData.name}
          width={768}
          height={310}
          quality={75}
          priority={true}
          onLoad={handleImageLoad}
        />
        <Image
          className="hidden lg:block"
          src={technologyData.images.portrait}
          width={515}
          height={527}
          quality={75}
          priority={true}
          alt={technologyData.name}
          onLoad={handleImageLoad}
        />
      </div>

      <div className="flex w-full max-w-lg flex-col items-center px-4 pl-6 text-center lg:max-w-2xl lg:flex-row lg:items-start lg:justify-start lg:gap-8 lg:p-0">
        <ul className="mt-6 flex gap-4 uppercase tracking-widest lg:mt-0 lg:flex-col lg:gap-8">
          {data.map((technology, idx) => {
            const name = technology.name.toLowerCase()
            const isActive = idx === selectedTechnologyIdx
            return (
              <li key={name}>
                <TechnologyButton
                  label={String(idx + 1)}
                  isActive={isActive}
                  onClick={() => handleCrewChange(idx)}
                />
              </li>
            )
          })}
        </ul>
        <div className="mt-8 text-center lg:mt-0 lg:text-start">
          <span className="font-bellefair uppercase text-gray-light-1/50">
            the terminology...
          </span>
          <h1 className=" lg:space  font-bellefair text-h4 uppercase lg:text-h3">
            {technologyData.name}
          </h1>
          <p className=" mt-8 text-center leading-6 tracking-widest text-gray-light-1 lg:pr-12 lg:text-start  lg:[text-wrap:balance]">
            {technologyData.description}
          </p>
        </div>
      </div>
    </>
  )
}

const TechnologyButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <button
      type="button"
      onClick={typeof onClick === "function" ? onClick : () => {}}
      className={clsx(
        "h-10 w-10 select-none  rounded-full bg-transparent text-gray-light-1 outline outline-1 transition-colors duration-200 ease-out lg:h-16 lg:w-16 lg:text-h5",
        isActive && "bg-white text-[#000]"
      )}
      aria-label={label.toLowerCase()}
    >
      {label}
    </button>
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
