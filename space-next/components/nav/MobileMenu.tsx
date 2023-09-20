"use client"

import { Fragment, useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Transition, Dialog } from "@headlessui/react"
import Link from "next/link"
import { Menu } from "./Navbar"

export const MobileMenu = ({ menu }: { menu: Menu }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isOpen, setIsOpen] = useState(false)
  const openMobileMenu = () => setIsOpen(true)
  const closeMobileMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  return (
    <>
      <button
        type="button"
        aria-label="toggle menu navbar"
        aria-controls="primary-navigation"
        aria-expanded="false"
        className="z-[100]"
        onClick={openMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          {/* OVERLAY */}
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          {/* CONTENT */}
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[100%]"
          >
            <Dialog.Panel className="fixed bottom-0  right-0 bg-transparent backdrop-blur-lg  top-0 flex h-full w-64 flex-col px-4">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center  ml-auto"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                    <g fill="#D0D6F9" fill-rule="evenodd">
                      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                    </g>
                  </svg>
                </button>

                <ul className="flex flex-col pt-10 pl-4 gap-10 text-nav text-white uppercase">
                  {menu.map((item, idx) => (
                    <li key={item.label}>
                      <Link href={item.path} className="flex items-center gap-1">
                        {/* {I need to have always 2 numbers, like 00, 01} */}
                        <span className="font-bold">
                          {idx.toString().padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
