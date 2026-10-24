import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function KoFiButton() {
  return (
    <>
      <Link
        href='https://ko-fi.com/N4N61JGIR0'
        target='_blank'
        className='inline-flex min-h-11 items-center'
      >
        <Image
          src='/kofi6.png'
          width={143}
          height={36}
          alt='Buy Me a Coffee at ko-fi.com'
        />
      </Link>
    </>
  );
}
