import { AdaptiveImage } from "@/components/AdaptativeImage"
import CrewImageMobile from "@/public/assets/crew/background-crew-mobile.jpg"
import CrewImageTablet from "@/public/assets/crew/background-crew-tablet.jpg"
import CrewImageDesktop from "@/public/assets/crew/background-crew-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import CrewDetails from "./CrewDetails"

export default function CrewPage() {
  return (
    <section className="pl-6">
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full"
        mobileImage={CrewImageMobile}
        tabletImage={CrewImageTablet}
        desktopImage={CrewImageDesktop}
      />
      <div className="flex flex-col items-center justify-center text-center lg:container  lg:mx-auto lg:mt-8 lg:grid lg:min-h-[44rem]  lg:max-w-max  lg:grid-cols-2 lg:items-start lg:gap-x-20">
        <div className="md:self-start">
          <NumberWithText number="02" title="meet your crew" />
        </div>

        <CrewDetails data={dataJson.crew} />
      </div>
    </section>
  )
}
