export function Header({ number, title }: HeaderProps) {
  return (
    <p className="flex items-center gap-3 uppercase tracking-widest">
      <span className="inline-block text-gray-light-1">{number}</span>
      {title}
    </p>
  )
}
type HeaderProps = {
  number: string
  title: string
}
