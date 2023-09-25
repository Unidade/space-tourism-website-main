import { AdaptiveImage } from "@/components/AdaptativeImage"
import TechnologyMobile from "@/public/assets/technology/background-technology-mobile.jpg"
import TechnologyTablet from "@/public/assets/technology/background-technology-tablet.jpg"
import TechnologyDesktop from "@/public/assets/technology/background-technology-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import TechnologyDetails from "./TechnologyDetails"

export default function TechnologyPage() {
  return (
    <section className="mt-8 pb-10">
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full"
        mobileImage={TechnologyMobile}
        tabletImage={TechnologyTablet}
        desktopImage={TechnologyDesktop}
      />
      <div className="flex flex-col items-center justify-center text-center lg:mx-auto lg:w-max lg:items-start">
        <div className="pl-6 sm:self-start lg:self-auto">
          <NumberWithText number="03" title="space launch 101" />
        </div>
        <div className="flex w-full flex-col items-center 2xl:container lg:flex-row-reverse lg:justify-between lg:gap-6">
          <TechnologyDetails data={dataJson.technology} />
        </div>
      </div>
    </section>
  )
}
