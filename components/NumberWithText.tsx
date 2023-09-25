export function NumberWithText({ number, title }: NumberWithTextProps) {
  return (
    <p className="flex items-center gap-3 font-light uppercase tracking-widest">
      <span className="inline-block font-bold text-gray-light-1/25">{number}</span>
      {title}
    </p>
  )
}
type NumberWithTextProps = {
  number: string
  title: string
}
