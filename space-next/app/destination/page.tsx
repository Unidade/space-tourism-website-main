import { AdaptiveImage } from "@/components/AdaptativeImage"
import DestinationTablet from "@/public/assets/destination/background-destination-tablet.jpg"
import DestinationMobile from "@/public/assets/destination/background-destination-mobile.jpg"
import DestinationDesktop from "@/public/assets/destination/background-destination-desktop.jpg"

import dataJson from "@/public/data.json"
import DestinationDetails from "./DestinationDetails"
import { Header } from "@/components/Header"

export default function DestinationPage() {
  return (
    <section className="pb-14">
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full  bg-repeat"
        mobileImage={DestinationMobile}
        tabletImage={DestinationTablet}
        desktopImage={DestinationDesktop}
      />
      <div className="flex flex-col items-center px-10">
        <Header number="01" title="pick your destination" />
        <DestinationDetails data={dataJson.destinations} />
      </div>
    </section>
  )
}
