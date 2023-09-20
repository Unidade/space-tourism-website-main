import { AdaptiveImage } from "@/components/AdaptativeImage"
import HeroMobile from "@/public/assets/home/background-home-mobile.jpg"
import HeroDesktop from "@/public/assets/home/background-home-desktop.jpg"
import HeroTablet from "@/public/assets/home/background-home-tablet.jpg"

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdaptiveImage
        className="w-full h-full absolute inset-0 -z-50"
        mobileImage={HeroMobile}
        tabletImage={HeroTablet}
        desktopImage={HeroDesktop}
      />
    </section>
  )
}
