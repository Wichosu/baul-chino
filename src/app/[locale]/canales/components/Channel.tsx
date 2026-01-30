import Link from 'next/link';
import { IChannel } from '../interfaces/IChannel';
import React from 'react';

interface Props {
  channel: IChannel;
}

export default function Channel({ channel }: Props) {
  return (
    <article className='my-10'>
      <Link
        href={channel.url}
        target='_blank'
        className='text-2xl text-blue-600 font-medium no-underline hover:underline hover:text-blue-700'
      >
        {channel.name}
      </Link>
      <p className='text-xl text-black font-normal my-2.5'>
        {channel.description}
      </p>
      <Categories>
        {channel.channel_category.map(({ category }) => `${category.name} | `)}
      </Categories>
      <Categories>
        {channel.channel_language.map(({ language }) => `${language.name} | `)}
      </Categories>
    </article>
  );
}

function Categories({ children }: { children: React.ReactNode }) {
  return (
    <small className='text-lg text-black font-light block mb-1'>
      {children}
    </small>
  );
}
