export default function LoadingCanvasSkeleton() {
  return (
    <>
      <p className="text-center">Loading Canvas...</p>
      <div className="w-fit mx-auto flex flex-wrap gap-5">
        <LoadingCanvasSkeletonItem />
        <LoadingCanvasSkeletonItem />
      </div>
    </>
  )
}

function LoadingCanvasSkeletonItem() {
  return (
    <div className="w-[100px] h-[100px] p-5 border-2 border-solid border-neutral-600 animate-pulse text-6xl text-center">
      等
    </div>
  )
}