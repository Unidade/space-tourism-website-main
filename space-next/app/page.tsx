import { AdaptiveImage } from "@/components/AdaptativeImage"
import HeroMobile from "@/public/assets/home/background-home-mobile.jpg"
import HeroDesktop from "@/public/assets/home/background-home-desktop.jpg"
import HeroTablet from "@/public/assets/home/background-home-tablet.jpg"

export default function Home() {
  return (
    <section className="mt-8 sm:mt-10">
      <AdaptiveImage
        className="w-full h-full absolute inset-0 -z-50 bg-blend-screen withGradient"
        mobileImage={HeroMobile}
        tabletImage={HeroTablet}
        desktopImage={HeroDesktop}
      />
      <div className="flex flex-col items-center max-w-xs sm:max-w-md mx-auto justify-between min-h-[80vh] max-h-[calc(100vh-62px)] text-center text-white pb-20">
        <div>
          <p className="text-sub-h2 sm:text-[1.25rem] text-gray-light-1 uppercase">
            So, you want to travel to
          </p>
          <h1 className="text-[5rem] sm:text-h1 sm:mt-4 uppercase font-bellefair">
            Space
          </h1>
          <p className="text-sub-h2 sm:text-body text-gray-light-1 leading-relaxed sm:mt-6">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button
          className="mt-20 bg-white w-[9.375rem] font-bellefair tracking-[0.07813rem] h-[9.375rem] text-[1.25rem] rounded-full text-black  uppercase"
          type="button"
        >
          Explore
        </button>
      </div>
    </section>
  )
}
