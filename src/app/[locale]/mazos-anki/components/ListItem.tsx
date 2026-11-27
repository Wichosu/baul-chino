import Link from 'next/link';

interface Props {
  linkRef: string;
  linkName: string;
}

export default function ListItem({ linkRef, linkName }: Props) {
  return (
    <Link
      href={linkRef}
      download
      className='text-xl text-brass-deep font-medium block my-5 w-fit no-underline hover:text-[#553409] hover:underline'
    >
      {linkName}
    </Link>
  );
}
