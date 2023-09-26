import { AdaptiveImage } from "@/components/AdaptiveImage"
import CrewImageMobile from "@/public/assets/crew/background-crew-mobile.jpg"
import CrewImageTablet from "@/public/assets/crew/background-crew-tablet.jpg"
import CrewImageDesktop from "@/public/assets/crew/background-crew-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import CrewDetails from "./CrewDetails"

export default function CrewPage() {
  return (
    <section className="pl-6 lg:pl-20">
      <AdaptiveImage
        quality={100}
        className="withGradient -z-10"
        mobileImage={CrewImageMobile}
        tabletImage={CrewImageTablet}
        desktopImage={CrewImageDesktop}
      />
      <div className="flex flex-col items-center justify-center text-center lg:mx-auto lg:grid lg:min-h-[40rem] lg:w-11/12  lg:grid-cols-2 lg:items-start ">
        <div className="md:self-start">
          <NumberWithText number="02" title="meet your crew" />
        </div>

        <CrewDetails data={dataJson.crew} />
      </div>
    </section>
  )
}
