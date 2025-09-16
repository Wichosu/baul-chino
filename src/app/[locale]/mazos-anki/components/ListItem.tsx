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
      className='text-xl text-blue-600 font-medium block my-5 w-fit no-underline hover:text-blue-700 hover:underline'
    >
      {linkName}
    </Link>
  );
}
