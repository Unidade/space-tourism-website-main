export function NumberWithText({ number, title }: NumberWithTextProps) {
  return (
    <p className="flex items-center gap-3 uppercase tracking-widest">
      <span className="inline-block text-gray-light-1">{number}</span>
      {title}
    </p>
  )
}
type NumberWithTextProps = {
  number: string
  title: string
}
