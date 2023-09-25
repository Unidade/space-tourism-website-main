import { AdaptiveImage } from "@/components/AdaptativeImage"
import HeroMobile from "@/public/assets/home/background-home-mobile.jpg"
import HeroDesktop from "@/public/assets/home/background-home-desktop.jpg"
import HeroTablet from "@/public/assets/home/background-home-tablet.jpg"
import Link from "next/link"

export default function Home() {
  return (
    <section className="mt-8  pb-10 pl-6 sm:mt-20">
      <AdaptiveImage
        className="withGradient absolute inset-0 -z-50 h-full w-full  bg-repeat"
        mobileImage={HeroMobile}
        tabletImage={HeroTablet}
        desktopImage={HeroDesktop}
      />
      <div className="mx-auto flex max-w-xs flex-col items-center justify-between text-center  text-white sm:max-w-md ">
        <div>
          <p className="text-sub-h2 uppercase text-gray-light-1 sm:text-[1.25rem]">
            So, you want to travel to
          </p>
          <h1 className="font-bellefair text-[5rem] uppercase sm:mt-4 sm:text-h1">
            Space
          </h1>
          <p className="text-sub-h2 leading-relaxed text-gray-light-1 sm:mt-4 sm:text-body">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="mt-10">
          <Link href={"/destination"} prefetch>
            <button
              className="hoverAnimated relative h-[9.375rem] w-[9.375rem] rounded-full bg-white py-1 font-bellefair text-[1.25rem] uppercase tracking-[0.07813rem] text-black  transition-all"
              type="button"
            >
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
