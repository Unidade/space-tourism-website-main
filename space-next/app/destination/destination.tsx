"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

export default function DestinationDetails({ data }: { data: Destination[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const destinationQuery = searchParams.get("q")
  if (!destinationQuery) {
    const updatedSearchParams = new URLSearchParams(Array.from(searchParams.entries()))

    updatedSearchParams.set("q", data[0].name.toLowerCase())
    const search = updatedSearchParams.toString()

    router.replace(`${pathname}?${search}`)
    return null
  }

  const destinationsNames = data.map((data) => data.name.toLowerCase())

  function getDestinationData(destination: string) {
    if (!destinationsNames.includes(destination.toLowerCase())) return null
    return data.find((data) => data.name.toLowerCase() === destination.toLowerCase())
  }

  const destinationData = getDestinationData(destinationQuery)

  if (!destinationData)
    return (
      <div>
        <h1>invalid destination</h1>
      </div>
    )

  return (
    <>
      <Image
        className="mt-6"
        src={destinationData.images.webp}
        alt={destinationData.name}
        width={475}
        height={475}
        quality={100}
        priority={true}
      />
      <ul className="mt-8 flex gap-4 uppercase  tracking-widest">
        {destinationsNames.map((destinationName) => {
          const isActive = destinationName === destinationQuery

          return (
            <Link
              href={{
                pathname,
                query: { q: destinationName },
              }}
              scroll={false}
              replace
              key={destinationName}
              className={clsx("border-b-4 border-transparent pb-2 text-gray-light-1", {
                "border-white text-white": isActive,
              })}
            >
              {destinationName}
            </Link>
          )
        })}
      </ul>
      <h1 className="mt-8 font-bellefair text-h3 uppercase">{destinationData.name}</h1>
      <p className="text-center leading-6 tracking-wider">
        {destinationData.description}
      </p>
      <div className="mt-8 w-full scale-y-[10%] border border-gray-light-1/20" />
      <div className="flex flex-col gap-4">
        <div className="mt-8 flex flex-col gap-2 text-center">
          <p className="uppercase tracking-widest text-gray-light-1">avg.distance</p>
          <p className="font-bellefair text-h4 uppercase">{destinationData.distance}</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="uppercase tracking-widest text-gray-light-1">est. travel time</p>
          <p className="font-bellefair text-h4 uppercase">{destinationData.travel}</p>
        </div>
      </div>
    </>
  )
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
