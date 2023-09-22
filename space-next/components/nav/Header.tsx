import { MobileMenu } from "@/components/nav/MobileMenu"
import Link from "next/link"
import DesktopMenu from "./DesktopMenu"

const menu = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/destination",
    label: "destination",
  },
  {
    path: "/crew",
    label: "crew",
  },
  {
    path: "/technology",
    label: "technology",
  },
] as const

export type Menu = typeof menu

export default function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-between lg:pt-4">
      <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className="z-20 ml-auto hidden flex-1 translate-x-4 -scale-y-50  border border-gray-light-1  lg:block"></div>
      <nav className="h-full">
        <div className="block pr-4 sm:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="hidden h-full shrink-0 sm:block">
          <DesktopMenu menu={menu} />
        </div>
      </nav>
    </header>
  )
}
