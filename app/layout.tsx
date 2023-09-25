import "./globals.css"
import type { Metadata } from "next"
import { Bellefair, Barlow_Condensed } from "next/font/google"

import clsx from "clsx"
import Header from "@/components/nav/Header"

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
})

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
})

export const metadata: Metadata = {
  title: "CosmoCruises",
  description: "Take a trip to outer space.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-[14px] xl:text-[16px] 2xl:text-[18px]">
      <body
        className={clsx([
          bellefair.variable,
          barlowCondensed.variable,
          "min-w-screen relative z-10 min-h-screen bg-black font-barlow text-white",
        ])}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
