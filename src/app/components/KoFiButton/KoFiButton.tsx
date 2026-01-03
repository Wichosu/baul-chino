import React from 'react';
import Link from 'next/link';

export function KoFiButton() {
  return (
    <>
      <Link href='https://ko-fi.com/N4N61JGIR0' target='_blank'>
        <img
          height='36'
          style={{ border: '0px', height: '36px' }}
          src='https://storage.ko-fi.com/cdn/kofi6.png?v=6'
          alt='Buy Me a Coffee at ko-fi.com'
        />
      </Link>
    </>
  );
}
