import React from "react";
import dynamic from "next/dynamic";

const LazyIme = dynamic(() => import('./ImeInstance'), { loading: () => <Loading /> })

export default function Ime() {
  return (
    <LazyIme />
  )
}

function Loading() {
  return (
    <div>
      <div className="animate-pulse">Loading Ime...</div> (this allows you to write hanzi without installing anything)...
    </div>
  )
}