import clsx, { ClassValue } from "clsx"

export default function Section({
  children,
  classValues,
}: {
  children: React.ReactNode
  classValues?: ClassValue[]
}) {
  return (
    <section
      className={clsx(
        "mt-8 pb-10 lg:mt-0",

        classValues
      )}
    >
      {children}
    </section>
  )
}
