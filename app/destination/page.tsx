import { AdaptiveImage } from "@/components/AdaptiveImage"
import DestinationTablet from "@/public/assets/destination/background-destination-tablet.jpg"
import DestinationMobile from "@/public/assets/destination/background-destination-mobile.jpg"
import DestinationDesktop from "@/public/assets/destination/background-destination-desktop.jpg"

import { cookies } from "next/headers"
import dataJson from "@/public/data.json"
import DestinationDetails from "./DestinationDetails"
import { NumberWithText } from "@/components/NumberWithText"
import { motion } from "framer-motion"
import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"

export default function DestinationPage() {
  const destination = cookies().get("destination")?.value || "moon"

  return (
    <Section>
      <AdaptiveImage
        quality={100}
        className="withGradient -z-10"
        mobileImage={DestinationMobile}
        tabletImage={DestinationTablet}
        desktopImage={DestinationDesktop}
      />
      <Container>
        <div className="pl-6 sm:self-start lg:pl-0">
          <NumberWithText number="01" title="pick your destination" />
        </div>

        <div className="flex flex-col items-center text-center lg:mt-10 lg:w-full lg:flex-row lg:gap-40">
          <DestinationDetails data={dataJson.destinations} destination={destination} />
        </div>
      </Container>
    </Section>
  )
}
