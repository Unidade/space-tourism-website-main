import { AdaptiveImage } from "@/components/AdaptativeImage"
import DestinationTablet from "@/public/assets/destination/background-destination-tablet.jpg"
import DestinationMobile from "@/public/assets/destination/background-destination-mobile.jpg"
import DestinationDesktop from "@/public/assets/destination/background-destination-desktop.jpg"

import dataJson from "@/public/data.json"
import DestinationDetails from "./destination"
import { Suspense } from "react"

export default function DestinationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <section className="pb-14">
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full  bg-repeat"
        mobileImage={DestinationMobile}
        tabletImage={DestinationTablet}
        desktopImage={DestinationDesktop}
      />
      <div className="mt-10 flex flex-col items-center px-10">
        <p className="flex items-center gap-3 uppercase tracking-widest">
          <span className="inline-block text-gray-light-1">01</span>pick your destination
        </p>
        <Suspense fallback={<Loading />}>
          <DestinationDetails data={dataJson.destinations} />
        </Suspense>
      </div>
    </section>
  )
}

function Loading() {
  return null
}
