"use client"
export function DestinationDetailItem({ label, value }: DestinationDetailItemProps) {
  return (
    <div className="mt-8 flex flex-col gap-2 text-center">
      <p className="uppercase tracking-widest text-gray-light-1">{label}</p>
      <p className="font-bellefair text-h4 uppercase">{value}</p>
    </div>
  )
}
type DestinationDetailItemProps = {
  label: string
  value: string
}
