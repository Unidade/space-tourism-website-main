import { AdaptiveImage } from "@/components/AdaptiveImage"
import TechnologyMobile from "@/public/assets/technology/background-technology-mobile.jpg"
import TechnologyTablet from "@/public/assets/technology/background-technology-tablet.jpg"
import TechnologyDesktop from "@/public/assets/technology/background-technology-desktop.jpg"

import dataJson from "@/public/data.json"

import { NumberWithText } from "@/components/NumberWithText"
import TechnologyDetails from "./TechnologyDetails"
import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"

export default function TechnologyPage() {
  return (
    <Section>
      <AdaptiveImage
        quality={100}
        className="withGradient -z-10"
        mobileImage={TechnologyMobile}
        tabletImage={TechnologyTablet}
        desktopImage={TechnologyDesktop}
      />
      <Container>
        <div className="pl-6 sm:self-start lg:pl-0">
          <NumberWithText number="03" title="space launch 101" />
        </div>
        <div className="flex w-full flex-col items-center 2xl:container lg:flex-row-reverse lg:justify-between lg:gap-6">
          <TechnologyDetails data={dataJson.technology} />
        </div>
      </Container>
    </Section>
  )
}
