import { Ref } from "react";
import Square from "./Square";
import TemplateHeaders from "./TemplateHeaders";
import { useTemplateContext } from "./TemplateContext";

type Props = {
  targetRef: Ref<HTMLDivElement>
}

export default function TemplatePreview({ targetRef }: Props) {
  const { gridGap, squareCount } = useTemplateContext()

  const gridStyles = {
    gap: `${gridGap}mm`,
  }

  return (
    <div className="w-full overflow-scroll">
      <div className="w-fit h-fit mt-5 overflow-hidden border border-solid border-black lg:mx-auto" ref={targetRef}>
        <div className="flex flex-col gap-[2mm] w-[210mm] h-[297mm] max-w-[210mm] max-h-[297mm]">
          <span className="m-0 p-0 text-[12pt] text-center">www.baulchino.com</span>
          <TemplateHeaders />
          <div className="w-11/12 mx-auto flex flex-wrap" style={gridStyles}>
            {
              Array.from({ length: squareCount }).map((_, index) => (
                <Square key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}