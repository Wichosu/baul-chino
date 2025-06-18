import { useTemplateContext } from "../TemplateContext"
import { useTranslations } from "next-intl"

export default function GridForm() {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.GridForm')
  const { gridGap, squareCount, setGridGap, setSquareCount } = useTemplateContext()

  const handleGridGapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const maxValue = 50
    const minValue = 0

    if(value <= minValue) {
      e.target.value = minValue.toString()
      setGridGap(minValue)
      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()
      setGridGap(maxValue)
      return
    }

    e.target.value = value.toString()
    setGridGap(value)
  }

  const handleSquareCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const maxValue = 999
    const minValue = 0

    if(value <= minValue) {
      e.target.value = minValue.toString()
      setSquareCount(minValue)
      return
    }

    if(value > maxValue) {
      e.target.value = maxValue.toString()
      setSquareCount(maxValue)
      return
    }

    e.target.value = value.toString()
    setSquareCount(value)
  }

  return (
    <section>
      <h3 className="text-3xl text-black font-medium mt-5">{t('Title')}</h3>
      <ModifierContainer>
        <Label htmlFor="gridGap">{t('Label1')}</Label>
        <Span>{t('Span1')}</Span>
        <div>
          <Input
            type="number" 
            id="gridGap" 
            onChange={handleGridGapChange} 
            defaultValue={gridGap}
            className="rounded-r-none"
          />
          <InputUnitSpan>mm</InputUnitSpan>
        </div>
      </ModifierContainer>
      <ModifierContainer>
        <Label htmlFor="squareCount">{t('Label2')}</Label>
        <Span>{t('Span2')}</Span>
        <Input
          type="number" 
          id="squareCount" 
          onChange={handleSquareCountChange} 
          defaultValue={squareCount}
        />
      </ModifierContainer>
    </section>
  )
}

function ModifierContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:inline-block lg:mr-5">
      { children }
    </div>
  )
}

function Label({ children, htmlFor }: { children: React.ReactNode, htmlFor: string }) {
  return (
    <label className="text-2xl text-black font-normal lg:mr-2.5" htmlFor={htmlFor}>
      { children }
    </label>
  )
}

function Span({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-lg text-black font-light block">
      { children }
    </span>
  )
}

function Input({ className, ...props }: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        text-lg text-black font-normal w-32 mt-2.5 mb-5 py-1 px-2
        border border-solid border-black rounded-md
        focus:border-transparent focus:outline-blue-600
        ${className}
      `}
      {...props}
    />
  )
}

function InputUnitSpan({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        text-lg text-black font-light bg-gray-300 py-2 px-2
        rounded-r-md
      "
    >
      { children }
    </span>
  )
}