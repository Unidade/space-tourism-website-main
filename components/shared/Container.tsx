import clsx, { ClassValue } from "clsx"

export default function Container({
  children,
  classValues,
}: {
  children: React.ReactNode
  classValues?: ClassValue[]
}) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center lg:mx-auto lg:w-11/12 lg:pl-20",
        classValues
      )}
    >
      {children}
    </div>
  )
}
