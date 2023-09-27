import { AdaptiveImage } from "@/components/AdaptiveImage"
import CrewImageMobile from "@/public/assets/crew/background-crew-mobile.jpg"
import CrewImageTablet from "@/public/assets/crew/background-crew-tablet.jpg"
import CrewImageDesktop from "@/public/assets/crew/background-crew-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import CrewDetails from "./CrewDetails"
import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"

export default function CrewPage() {
  return (
    // remove padding bottom
    <Section classValues={["md:pb-0"]}>
      <AdaptiveImage
        quality={100}
        className="withGradient -z-10"
        mobileImage={CrewImageMobile}
        tabletImage={CrewImageTablet}
        desktopImage={CrewImageDesktop}
      />
      <Container classValues={["h-full"]}>
        <div className="pl-6 sm:self-start lg:pl-0">
          <NumberWithText number="02" title="meet your crew" />
        </div>
        <CrewDetails data={dataJson.crew} />
      </Container>
    </Section>
  )
}
