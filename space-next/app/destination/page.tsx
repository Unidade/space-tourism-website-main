import { AdaptiveImage } from "@/components/AdaptativeImage"
import DestinationTablet from "@/public/assets/destination/background-destination-tablet.jpg"
import DestinationMobile from "@/public/assets/destination/background-destination-mobile.jpg"
import DestinationDesktop from "@/public/assets/destination/background-destination-desktop.jpg"

import { cookies } from "next/headers"
import dataJson from "@/public/data.json"
import DestinationDetails from "./DestinationDetails"
import { NumberWithText } from "@/components/NumberWithText"
import { motion } from "framer-motion"

export default function DestinationPage() {
  const destination = cookies().get("destination")?.value || "moon"

  return (
    <section className="pb-14">
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full"
        mobileImage={DestinationMobile}
        tabletImage={DestinationTablet}
        desktopImage={DestinationDesktop}
      />
      <div className="lg: flex flex-col items-center px-10 lg:mx-auto lg:w-11/12 lg:pl-20">
        <div className="lg:self-start">
          <NumberWithText number="01" title="pick your destination" />
        </div>

        <div className="hidden lg:flex lg:gap-20">
          <DestinationDetails data={dataJson.destinations} destination={destination} />
        </div>
      </div>
    </section>
  )
}
