import { MobileMenu } from "@/components/nav/MobileMenu"

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

export default function Navbar() {
  return (
    <nav className="flex w-full pt-4 justify-between items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className="block sm:hidden">
        <MobileMenu menu={menu} />
      </div>
      <ul className="hidden text-black sm:flex">
        <li>
          <a className="text-white z-50" href="/">
            Home
          </a>
        </li>
      </ul>
    </nav>
  )
}
