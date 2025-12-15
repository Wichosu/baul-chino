import { useTemplateContext } from '../TemplateContext';
import { useTranslations } from 'next-intl';

export default function SquareForm() {
  const t = useTranslations('TemplateGenerator.TemplateGenerator.SquareForm');
  const { squareSize, setSquareSize } = useTemplateContext();

  const handleSquareSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const maxValue = 275;
    const minValue = 10;

    if (value <= minValue) {
      e.target.value = value.toString();
      setSquareSize(minValue);
      return;
    }

    if (value > maxValue) {
      e.target.value = maxValue.toString();
      setSquareSize(maxValue);
      return;
    }

    e.target.value = value.toString();
    setSquareSize(value);
  };

  return (
    <section>
      <h2 className='text-3xl text-black font-medium mt-5'>{t('Title')}</h2>
      <ModifierContainer>
        <Label htmlFor='squareSize'>{t('Label1')}</Label>
        <Span>{t('Span1')}</Span>
        <div>
          <Input
            type='number'
            id='squareSize'
            name='squareSize'
            onChange={handleSquareSizeChange}
            defaultValue={squareSize}
            min={10}
            className='rounded-r-none'
          />
          <InputUnitSpan>mm</InputUnitSpan>
        </div>
      </ModifierContainer>
    </section>
  );
}

function ModifierContainer({ children }: { children: React.ReactNode }) {
  return <div className='lg:inline-block lg:mr-5'>{children}</div>;
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      className='text-2xl text-black font-normal lg:mr-2.5'
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

function Span({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-lg text-black font-light block'>{children}</span>
  );
}

function Input({
  className,
  ...props
}: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        text-lg text-black font-normal w-32 mt-2.5 mb-5 py-1 px-2
        border border-solid border-black rounded-md
        focus:outline-blue-600 focus:border-transparent
        ${className}
      `}
      {...props}
    />
  );
}

function InputUnitSpan({ children }: { children: React.ReactNode }) {
  return (
    <span
      className='
        text-lg text-black font-light bg-gray-300 py-2 px-2
        rounded-r-md
      '
    >
      {children}
    </span>
  );
}
