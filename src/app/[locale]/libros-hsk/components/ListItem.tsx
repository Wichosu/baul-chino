import Link from "next/link";

interface Props {
  linkRef: string,
  linkName: string,
}

export default function ListItem({ linkRef, linkName }: Props) {
  return (
    <Link
      href={linkRef}
      target="_blank"
      className="inline-block my-5 mx-5 w-fit text-blue-600 hover:text-blue-800 transition-colors"
    >
      { linkName }
    </Link>
  )
}