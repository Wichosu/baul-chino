import { useTemplateContext } from "./TemplateContext"

export default function TemplateHeaders() {
  const { titles } = useTemplateContext()

  return (
    <div className="flex w-11/12 mx-auto">
      {
        titles.map((title, index) => {
          const titleStyles = {
            marginRight: `${title.marginRight}mm`,
          }

          return (
            <h2 key={index} className="m-0 p-0" style={titleStyles}>{ title.name }</h2>
          )
        })
      }
    </div>
  )
}