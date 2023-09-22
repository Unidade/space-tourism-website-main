import { AdaptiveImage } from "@/components/AdaptativeImage"
import CrewImageMobile from "@/public/assets/crew/background-crew-mobile.jpg"
import CrewImageTablet from "@/public/assets/crew/background-crew-tablet.jpg"
import CrewImageDesktop from "@/public/assets/crew/background-crew-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import CrewDetails from "./CrewDetails"

export default function CrewPage() {
  return (
    <section>
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full"
        mobileImage={CrewImageMobile}
        tabletImage={CrewImageTablet}
        desktopImage={CrewImageDesktop}
      />
      <div className="flex  flex-col items-center  px-4 text-center">
        <NumberWithText number="02" title="meet your crew" />
        <CrewDetails data={dataJson.crew} />
      </div>
    </section>
  )
}