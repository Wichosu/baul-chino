import Link from "next/link"
import Image from "next/image"
import downloadIcon from "../../assets/download.svg";
import { StaticImageData } from "next/image";

type Props = {
  textAlt: string,
  img: string | StaticImageData,
  pdfUrl: string
}

export default function TemplateCard({ textAlt, img, pdfUrl }: Props) {
  return (
    <article className="inline-block w-fit no-underline my-2.5 snap-center lg:mx-auto">
      <figure className="mx-auto">
        <Image alt={textAlt} src={img} width={500} height={500} className="aspect-square object-contain" />
      </figure>
      <Link
        href={pdfUrl}
        download
        target="_blank"
        className="flex items-center w-fit bg-blue-600 mt-1 mx-auto py-2.5 px-5 border-none rounded-lg transition hover:bg-blue-700"
      >
        <span className="text-xl text-white font-medium">{textAlt}</span>
        <figure>
          <Image alt="Download icon" src={downloadIcon} width={20} height={20} className="aspect-square object-contain" />
        </figure>
      </Link>
    </article>
  )
}