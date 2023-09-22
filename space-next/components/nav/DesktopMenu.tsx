"use client"
import Link from "next/link"
import { Menu } from "./Navbar"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function DesktopMenu({ menu }: { menu: Menu }) {
  const pathname = usePathname()

  return (
    <ul className="desktopNavBarBackground flex h-full items-center gap-4 overflow-hidden px-4 text-nav text-white md:px-12">
      {menu.map(({ path, label }, idx) => {
        const isActive = pathname === path

        return (
          <li
            key={label}
            className={clsx(
              "h-full border-b-4 border-transparent px-2",
              isActive ? "border-white" : "hover:border-gray-light-1/75"
            )}
          >
            <Link className="z-10 flex h-full  items-center gap-2 uppercase" href={path}>
              <span className="hidden  font-medium  lg:block">
                {idx.toString().padStart(2, "0")}
              </span>
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
