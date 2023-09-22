import { AdaptiveImage } from "@/components/AdaptativeImage"
import TechnologyMobile from "@/public/assets/technology/background-technology-mobile.jpg"
import TechnologyTablet from "@/public/assets/technology/background-technology-tablet.jpg"
import TechnologyDesktop from "@/public/assets/technology/background-technology-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import TechnologyDetails from "./TechnologyDetails"

export default function TechnologyPage() {
  return (
    <section>
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full"
        mobileImage={TechnologyMobile}
        tabletImage={TechnologyTablet}
        desktopImage={TechnologyDesktop}
      />
      <div className="flex  flex-col items-center  px-4 text-center">
        <NumberWithText number="03" title="space launch 101" />
        <TechnologyDetails data={dataJson.technology} />
      </div>
    </section>
  )
}
